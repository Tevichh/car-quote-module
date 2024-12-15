import React, { useEffect } from 'react'
import "./orbitComponent.css"
import { getOrbitControls, gsapAnimation } from '../../services/render';

let orbitControls;

const animations = {
    original: { cam: { x: 7.3, y: 2.1, z: 4.7 }, pos: { x: 0, y: 0.5, z: 0 } },
    top: { cam: { x: 0.5, y: 10, z: 0 }, pos: { x: 0.3, y: 0, z: 0 } },
    front: { cam: { x: 0, y: 1, z: 10 }, pos: { x: 0, y: 0.2, z: 0 } },
    back: { cam: { x: 0, y: 1, z: -10 }, pos: { x: 0, y: 0.2, z: 0 } },
    left: { cam: { x: 7.2, y: 2, z: 0 }, pos: { x: 0, y: 0.5, z: 0 } },
    right: { cam: { x: -7.2, y: 2, z: 0 }, pos: { x: 0, y: 0.5, z: 0 } }
};

const stopControls = () => {
    orbitControls.enableZoom = false;
    orbitControls.enablePan = false;
    orbitControls.enableRotate = false;
    orbitControls.autoRotate = false;
};

const allowControls = () => {
    orbitControls.enableZoom = true;
    orbitControls.enablePan = false;
    orbitControls.enableRotate = true;
    orbitControls.autoRotate = false;
};

const useGsapAnimation = () => {
    const original = () => {
        allowControls();
        gsapAnimation(animations.original.cam, animations.original.pos);
    }

    const top = () => {
        gsapAnimation(animations.top.cam, animations.top.pos);
        stopControls();
    }

    const front = () => {
        gsapAnimation(animations.front.cam, animations.front.pos);
        stopControls();
    }

    const back = () => {
        gsapAnimation(animations.back.cam, animations.back.pos);
        stopControls();
    }

    const left = () => {
        gsapAnimation(animations.left.cam, animations.left.pos);
        stopControls();
    }

    const right = () => {
        gsapAnimation(animations.right.cam, animations.right.pos);
        stopControls();
    }

    return {
        original,
        top,
        front,
        back,
        left,
        right
    }
}


export const OrbitComponent = () => {

    useEffect(() => {
        gsapAnimation(animations.original.cam, animations.original.pos);
    }, [])
    orbitControls = getOrbitControls()
    const { original, top, front, back, left, right } = useGsapAnimation();
    return (
        <div className="orbitComponent">
            <button onClick={original}>LIBERAR MOV</button>
            <button onClick={top}>V.SUPERIOR</button>
            <button onClick={front}>V.FRONTAL</button>
            <button onClick={back}>V.TRASERA</button>
            <button onClick={left}>V.L.IZQUIERDA</button>
            <button onClick={right}>V.L.DERECHA</button>
        </div>

    )
}
