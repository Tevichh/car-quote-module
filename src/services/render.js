import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';
import { models } from '../models/carParts';

let renderer, camera, scene, orbitControls, container, gltfLoaders, timeline;

const loadingManager = new THREE.LoadingManager();
gltfLoaders = new GLTFLoader(loadingManager);


// Crear y configurar la escena
export const createScene = () => {
    // Crear escena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x021013);
    timeline = new gsap.timeline({ defaults: { duration: 1 } });

    // Configurar cámara
    camera = new THREE.PerspectiveCamera(22, 1, 0.1, 100);
    camera.position.set(7.3, 2.1, 4.7);
    camera.lookAt(new THREE.Vector3());
    scene.add(camera);

    // Configurar renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(100, 100);

    // Añadir controles orbitales
    orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.enablePan = false;
    orbitControls.maxPolarAngle = THREE.MathUtils.degToRad(80);
    orbitControls.maxDistance = 10;
    orbitControls.minDistance = 3;
    console.log(orbitControls)


    // Añadir grid (suelo)
    const grid = new THREE.GridHelper(20, 40, 0xffffff, 0xffffff);
    grid.material.opacity = 0.2;
    grid.material.depthWrite = false;
    grid.material.transparent = true;
    grid.userData.intangible = true;
    scene.add(grid);


    //luces
    const light1 = new THREE.DirectionalLight(0xffffff, 1.2);
    light1.position.set(6, 6, 6);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1.2);
    light2.position.set(-6, 6, 6);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.2);
    scene.add(ambientLight);

    // Animación    
    const animate = () => {
        orbitControls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();
};

// Redimensionar la escena
export const updateSceneOnResize = () => {
    if (!renderer || !camera || !container) return;

    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
};

// Inicializar la escena
export const initScene = (mountRef) => {
    container = mountRef.current;
    createScene();

    // Configurar dimensiones iniciales
    updateSceneOnResize();

    // Añadir el canvas al contenedor
    container.appendChild(renderer.domElement);

    // Escuchar cambios de tamaño
    window.addEventListener('resize', updateSceneOnResize);
};

// Limpiar la escena
export const cleanUpScene = () => {
    if (orbitControls) orbitControls.dispose();
    if (renderer) renderer.dispose();
    if (scene) scene.dispose();
    if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
    }
    window.removeEventListener('resize', updateSceneOnResize);
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
export const removeModels = (modelModal) => {

    if (modelModal !== "SELECCIONA") {
        const model = models.find(model => model.name === modelModal);
        if (model) {
            const rute = model.modelCar.rute;
            const group = model.modelCar.group;
            const scale = model.scale;
            //alert(`Modelo seleccionado: ${modelModal}`);

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
        }
    }

};

export const getOrbitControls = () => {
    return orbitControls;
}


export const getScene = () => {
    return scene;
}

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

// RAYCASTER PARA DETECTAR LOS OBJETOS DEL THREE JS
export function findElement(event, container) {
    const rect = container.getBoundingClientRect();
    const touch = event.touches ? event.touches[0] : null;
    const clientX = touch ? touch.clientX : event.clientX;
    const clientY = touch ? touch.clientY : event.clientY;

    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
        return null;
    }

    const normalizedX = ((clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = -((clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(normalizedX, normalizedY), camera);

    const intersects = raycaster.intersectObjects(
        scene.children.filter(obj => !obj.userData.intangible)
    );

    if (intersects.length) {
        const parent = intersects[0].object;
        alert(parent.name.split("_"));
        return parent.name.split("_");
    }

    return null;
}