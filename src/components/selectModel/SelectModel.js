import React, { useEffect, useState } from 'react';
import { models } from '../../models/carParts';
import { removeModels } from '../../services/render';
import { carColor } from '../../models/carColors';

export const SelectModel = ({ order }) => {
    const [selectedModel, setSelectedModel] = useState("");
    const [selectColor, setSelectColor] = useState("");

    useEffect(() => {
        if (order) {
            setSelectedModel(order["MODELO"])
        }
    }, [order])

    const handleModelChange = (event) => {
        const modelModal = event.target.value;
        removeModels(modelModal)
        setSelectedModel(modelModal);
    };

    const handleColorChange = (event) => {
        const colorModal = event.target.value;
        removeModels(colorModal)
        setSelectColor(colorModal);
    };

    return (
        <div className='selectModel card-menu p-3'>

            <div className="row p-2 gap-3">
                <div className="col-md-5">
                    <label>MODELO</label>
                    <select
                        id="modelSelect"
                        value={selectedModel}
                        onChange={handleModelChange}
                        className="form-select"
                    >
                        <option value="" disabled={selectedModel !== ''}>SELECCIONA</option>
                        {models.map((model, id) => (
                            <option key={id} value={model.name}>
                                {model.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-5">
                    <label>COLOR</label>
                    <select
                        value={selectColor}
                        onChange={handleColorChange}
                        className="form-select"
                    >
                        {Object.keys(carColor).map((color) => (
                            <option value={color}>{color}</option>
                        ))}
                    </select>
                </div>

            </div>


        </div>
    );
};
