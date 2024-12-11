import React, { useEffect, useRef } from 'react';
import { initScene, loadGroups, loadModels, updateSceneOnResize } from '../../services/render';


export const ModelComponent = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let cleanupScene;
        if (mountRef.current) {
            cleanupScene = initScene(mountRef.current);
            loadGroups()
            loadModels("./model/Modelo01/scene.gltf", "modelCar", 1)
        }

        const handleResize = () => {
            if (mountRef.current) {
                updateSceneOnResize(mountRef.current);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (cleanupScene) cleanupScene();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div ref={mountRef} className="modelComponent"></div>
        </>
    );
};
