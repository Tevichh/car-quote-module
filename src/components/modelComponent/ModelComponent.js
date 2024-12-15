import React, { useEffect, useRef} from 'react';
import { initScene, cleanUpScene, loadGroups, findElement } from '../../services/render';

export const ModelComponent = ({ getElement }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        initScene(mountRef);
        loadGroups();

        return () => {
            cleanUpScene();
        };
    }, []);

    const handleClick = (event) => {
        const container = mountRef.current;
        if (container) {
            const result = findElement(event, container);
            if (result) {
                getElement(result);
            }
        }
    };

    return (
        <div className="modelComponent" ref={mountRef} onClick={handleClick} />);
};