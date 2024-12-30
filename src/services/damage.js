import { userModelOrder } from "../App";
import { carColor } from "../models/carColors";
import { groupParts, groupPartsExtra } from "../models/groupParts";
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
    const color = 0xecab0f;
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

    if (!tabla[modeloCotizar.name]) return;

    for (const [key, value] of Object.entries(modeloCotizar)) {
        if (groupParts.includes(key)) {
            for (const [key2, value2] of Object.entries(value)) { // FILTRA PIEZAS DIFERENTES A DEFAULT //KEY : GRUPO - KEY2: PIEZA
                if (value2.paint !== "Default") {
                    document.getElementById("gramosUsados").innerHTML += `<br>${tabla[modeloCotizar.name][`${key}_${key2}`]}`;

                    //FUNCIONES COTIZAR
                    console.log(tabla[modeloCotizar.name][`${key}_${key2}`])
                }
            }
        }
    }
}


export const cargarTablaModelo = (tabla) => {
    for (const [key, value] of Object.entries(userModelOrder)) {
        if (groupParts.includes(key)) {
            for (const [key2, value2] of Object.entries(value)) { // FILTRA PIEZAS DIFERENTES A DEFAULT //KEY : GRUPO - KEY2: PIEZA
                userModelOrder[key][key2] = JSON.parse(tabla[`${key}_${key2}`])
                if (userModelOrder[key][key2].paint !== "Default") {
                    changePieceCar(key, key2)

                    if (key2 === "P1") {
                        actualizarSeleccionP1(key, true);
                    }
                }
            }
        }

        else if (groupPartsExtra.includes(key)) {

            for (const [key2, value2] of Object.entries(value)) {
                userModelOrder[key][key2] = JSON.parse(tabla[`${key}_${key2}`])
                if (userModelOrder[key][key2].damage === 1) {
                    changePieceExtraCar(key, key2, 1)
                } else {
                    //changePieceExtraCar(key, key2, 0)
                    //alert(`${key}_${key2}`)
                    changePieceExtraCar(key, key2, userModelOrder[key][key2].damage)
                }
            }
        }

        sumarCotizacion(userModelOrder, tabla)
    }
}

export const actualizarSeleccionP1 = (grupo, activo) => {
    const piezas = ["P2", "P3", "P4", "P5"];

    piezas.forEach(pieza => {
        if (activo) {
            changePieceCar(grupo, pieza);
        } else {
            changePieceCar(grupo, pieza, userModelOrder["color"]);
        }

        // Actualizar el modelo de usuario con los valores predeterminados
        userModelOrder[grupo][pieza] = {
            paint: "Default",
            layer: "Monocapa",
            line: "Baslac",
            varnish: "40-22"
        };
    });
};