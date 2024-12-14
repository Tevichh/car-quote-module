import React, { useEffect, useRef } from 'react';
import { initScene, cleanUpScene, loadGroups} from '../../services/render';

export const ModelComponent = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        initScene(mountRef);
        loadGroups();

        return () => {
            cleanUpScene();
        };
    }, []);

    return <div className="modelComponent" ref={mountRef} />;
};