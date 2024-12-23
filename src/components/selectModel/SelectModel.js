import React, { useEffect, useState } from 'react';
import { models } from '../../models/carParts';
import { removeModels } from '../../services/render';
import { carColor } from '../../models/carColors';
import { changeColorCar } from '../../services/damage';


export const SelectModel = ({ order }) => {
    const [selectedModel, setSelectedModel] = useState("");
    const [selectColor, setSelectColor] = useState("AMARILLO");

    useEffect(() => {
        if (order) {
            setSelectedModel(order["MODELO"])
            setSelectColor(order["Color"])
        }
    }, [order])

    const handleModelChange = (event) => {
        const modelModal = event.target.value;
        removeModels(modelModal)
        setSelectedModel(modelModal);
        setTimeout(() => {
            changeColorCar(selectColor);
        }, 1000);

    };

    const handleColorChange = (event) => {
        const colorModal = event.target.value;
        setSelectColor(colorModal);
        changeColorCar(colorModal);
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
