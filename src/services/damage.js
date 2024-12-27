import { userModelOrder } from "../App";
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
            } else if (part === "MIRRORL" || part === "MIRRORR") {
                child.material.color.set(0x000000);
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

export const changePieceExtraCar = (partModel, pieceModel, state) => {
    const color = 0xf39c12;
    const scene = getScene();


    scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            const childDivided = child.name.split("_");
            const part = childDivided[0];
            const piece = childDivided[1];

            if (part === partModel && piece === pieceModel && state === 1) {
                child.material.color.set(color);
            } else if (part === partModel && piece === pieceModel && state === 0) {
                child.material.color.set(userModelOrder[partModel][pieceModel].colorDefault);
            }



            /* if (part === partModel && piece === pieceModel) {
                child.material.color.set(color);
            } */
        }
    })

}

export const sumarCotizacion = (modeloCotizar, tabla) => {

    for (const [key, value] of Object.entries(modeloCotizar)) {
        if (groupParts.includes(key)) {
            for (const [key2, value2] of Object.entries(value)) {
                if (value2.paint !== "Default") {
                    document.getElementById("gramosUsados").innerHTML += `<br>${tabla[modeloCotizar.name][`${key}_${key2}`]}`;


                    console.log(tabla)
                }
            }
        }
    }
}