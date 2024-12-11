import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from "gsap";

let renderer, camera, scene, gltfLoaders, timeline, orbitControls;

export const initScene = (container) => {
    // Create Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x021013);

    timeline = new gsap.timeline({ defaults: { duration: 1 } });

    // Texture Loader
    const grid = new THREE.GridHelper(20, 40, 0xffffff, 0xffffff);
    grid.material.opacity = 0.2;
    grid.material.depthWrite = false;
    grid.material.transparent = true;
    grid.userData.intangible = true;
    scene.add(grid);


    // Scene Lights
    const light1 = new THREE.DirectionalLight(0xffffff, 1.2);
    light1.position.set(6, 6, 6);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1.2);
    light2.position.set(-6, 6, 6);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.2);
    scene.add(ambientLight);

    // Create camera
    camera = new THREE.PerspectiveCamera(
        20,
        container.clientWidth / container.clientHeight,
        0.1,
        100
    );

    // Render
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);


    // Orbitcontrols


    orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.enableZoom = true;
    orbitControls.enablePan = false;
    orbitControls.maxPolarAngle = THREE.MathUtils.degToRad(80);
    orbitControls.maxDistance = 10;
    orbitControls.minDistance = 3;

    camera.position.set(7.3, 2.1, 4.7);
    camera.lookAt(new THREE.Vector3());


    const loadingManager = new THREE.LoadingManager();
    gltfLoaders = new GLTFLoader(loadingManager);


    camera.position.z = 5;

    // Animation
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();

    return () => {
        renderer.dispose();
        container.removeChild(renderer.domElement);
        scene = null;
        camera = null;
    };
};

export const updateSceneOnResize = (container) => {
    if (!renderer || !camera) return;

    // Actualizar tamaño del renderizador
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Actualizar aspecto de la cámara
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
};


export const carParts = {
    modelCar: new THREE.Group(),
};


// Load groups
export const loadGroups = () => {
    scene.add(carParts.modelCar);
};


// Load Models
export const loadModels = (rute, group, scale) => {
    gltfLoaders.load(rute, (gltf) => {
        while (gltf.scene.children.length) {
            const model = gltf.scene.children[0];
            carParts[group].add(model);
            carParts[group].scale.set(scale, scale, scale);
        }
    });
};

// Remove Models
export const removeModels = (rute, group, scale) => {
    const oldModels = new THREE.Group();

    while (carParts[group].children.length) {
        oldModels.add(carParts[group].children[0]);
    }

    // Remove
    while (carParts[group].children.length) {
        carParts[group].remove(carParts[group].children[0]);
    }

    loadModels(rute, group, scale);

    // Free up memory
    oldModels.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material.dispose();
            child.geometry.dispose();
        }
    });
};

// Animation Move
export const gsapAnimation = (camPos, targetPost) => {
    timeline
        .to(orbitControls.target, {
            x: targetPost.x,
            y: targetPost.y,
            z: targetPost.z,
        })
        .to(
            camera.position,
            {
                x: camPos.x,
                y: camPos.y,
                z: camPos.z,
                onUpdate: () => camera.updateProjectionMatrix(),
            },
            "-=1.0"
        );
};


function onTouch(event) {
    const touch = event.touches ? event.touches[0] : null;
    const clientX = touch ? touch.clientX : event.clientX;
    const clientY = touch ? touch.clientY : event.clientY;
    const normalizedX = (clientX / window.innerWidth) * 2 - 1;
    const normalizedY = -(clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(normalizedX, normalizedY), camera);

    const intersects = raycaster.intersectObjects(scene.children.filter(obj => !obj.userData.intangible));

    if (intersects.length) {
        const parent = intersects[0].object;
        const lista = parent.name.split("_");


        return lista
    }
}
