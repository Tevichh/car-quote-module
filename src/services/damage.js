import { carColor } from "../models/carColors";
import { groupParts } from "../models/groupParts";
import { getScene } from "./render"
import * as THREE from 'three';



export const changeColorCar = (color) => {
    const scene = getScene();
    const colorHex = carColor[color];
    scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            const childDivided = child.name.split("_");
            const part = childDivided[0];

            if (groupParts.includes(part)) {
                child.material.color.set(colorHex);
            }
        }
    })
}

export const changePieceCar = (partModel, pieceModel, colorPaint = "") => {

    const scene = getScene();
    const color = colorPaint === "" ? 0x00ff00 : carColor[colorPaint];

    scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            const childDivided = child.name.split("_");
            const part = childDivided[0];
            const piece = childDivided[1];


            if (part === partModel && piece === pieceModel) {
                child.material.color.set(color);
            }
        }
    })
}

export const sumarCotizacion = (modeloCotizar, tabla) => {

    for (const [key, value] of Object.entries(modeloCotizar)) {
        if (groupParts.includes(key)) {
            for (const [key2, value2] of Object.entries(value)) {
                if (value2.paint !== "Default") {
                    //console.log(key, value2)
                    continue
                }
            }
        }
    }
}