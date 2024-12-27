import React, { use, useEffect, useState } from 'react';
import { Piece } from '../../models/Piece';
import { colorState, layers, lines, varnishes } from '../../models/state';
import { Button, Modal } from 'react-bootstrap';
import { changePieceCar, sumarCotizacion } from '../../services/damage';
import { userModelOrder } from '../../App';
import { groupParts, groupPartsExtra } from '../../models/groupParts';
import "./modal.css"

const paintState = colorState();

let piece = new Piece("ESPERANDO", "ESPERANDO")


export const QuoteComponent = ({ elementSelect, tableQuote }) => {

    const [paint, setPaint] = useState("Default");
    const [layer, setLayer] = useState("Monocapa");
    const [line, setLine] = useState("Baslac");
    const [varnish, setVarnish] = useState("40-22");


    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false) };
    const handleShow = () => { setShow(true); reiniciarValores() };

    const reiniciarValores = () => {
        const model = userModelOrder[piece.group][piece.part];
        setPaint(model.paint ? model.paint : "Default");
        setLayer(model.layer ? model.layer : "Monocapa");
        setLine(model.line ? model.line : "Baslac");
        setVarnish(model.varnish ? model.varnish : "40-22");
    }

    const handleSave = () => {

        piece.paint = paint;
        piece.layer = layer;
        piece.line = line;
        piece.varnish = varnish;

        console.log(piece)

        reiniciarValores()

        seleccionarPieza()
        handleClose()
    }

    useEffect(() => {
        if (!elementSelect) return;
        if (elementSelect[0] && elementSelect[1]) {
            piece.group = elementSelect[0]
            piece.part = elementSelect[1]

            //ABRIR MODAL PARA SELECCIONAR PINTURA
            if (groupParts.includes(piece.group)) handleShow();

            if (groupPartsExtra.includes(piece.group)) alert(userModelOrder[piece.group][piece.part].damage);

            //DEFINIR MODAL PARA PIEZAS EXTRAS
        }
    }, [elementSelect]);

    const seleccionarPieza = () => {
        userModelOrder[piece.group][piece.part] = piece.generateJson();

        if (userModelOrder[piece.group][piece.part].paint !== "Default") {
            changePieceCar(piece.group, piece.part);
            if (piece.part === "P1") seleccionarTodas(true);
            sumarCotizacion(userModelOrder, tableQuote)
        } else {
            changePieceCar(piece.group, piece.part, userModelOrder["color"]);
            seleccionarTodas(false);
            sumarCotizacion(userModelOrder, tableQuote);
        }


    }

    const seleccionarTodas = (activo) => {
        if (activo) {
            changePieceCar(piece.group, "P2");
            changePieceCar(piece.group, "P3");
            changePieceCar(piece.group, "P4");
            changePieceCar(piece.group, "P5");
        } else {
            changePieceCar(piece.group, "P2", userModelOrder["color"]);
            changePieceCar(piece.group, "P3", userModelOrder["color"]);
            changePieceCar(piece.group, "P4", userModelOrder["color"]);
            changePieceCar(piece.group, "P5", userModelOrder["color"]);
        }

        userModelOrder[piece.group]["P2"] = {
            paint: "Default",
            layer: "Monocapa",
            line: "Baslac",
            varnish: "40-22"
        };
        userModelOrder[piece.group]["P3"] = {
            paint: "Default",
            layer: "Monocapa",
            line: "Baslac",
            varnish: "40-22"
        };
        userModelOrder[piece.group]["P4"] = {
            paint: "Default",
            layer: "Monocapa",
            line: "Baslac",
            varnish: "40-22"
        };
        userModelOrder[piece.group]["P5"] = {
            paint: "Default",
            layer: "Monocapa",
            line: "Baslac",
            varnish: "40-22"
        };

    }

    return (
        <>
            <div className="QuoteComponent card-menu p-2">
                <ul className="list-group list-group-flush gap-3">
                    <li id="gramosUsados">GRAMOS UTILIZADOS: 0 Gr</li>
                    <li id="horasUsadas">HORAS UTILIZADAS: 0 H</li>
                    <li id="precioTotal">PRECIO TOTAL: 0 $</li>
                </ul>
            </div>

            <Modal show={show} onHide={handleClose} className='modal-dark'>
                <Modal.Header closeButton className="modal-dark">
                    <Modal.Title>{piece.group + " " + piece.part}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-dark">

                    <div className="row gy-3">
                        <div className="col-md-12">
                            <label>ESTADO DE LA PINTURA</label>
                            <select className="form-select" value={paint} onChange={(e) => setPaint(e.target.value)}>
                                {Object.keys(paintState).map((damage) => (
                                    <option value={damage} key={damage}>{damage}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label>TIPO DE CAPA</label>
                            <select className="form-select" value={layer} onChange={(e) => setLayer(e.target.value)}>
                                {layers.map((damage) => (
                                    <option value={damage} key={damage}>{damage}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label>TIPO DE BARNIZ</label>
                            <select className="form-select" value={varnish} onChange={(e) => setVarnish(e.target.value)}>
                                {varnishes.map((damage) => (
                                    <option value={damage} key={damage}>{damage}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label>TIPO DE LINEA</label>
                            <select className="form-select" value={line} onChange={(e) => setLine(e.target.value)}>
                                {lines.map((damage) => (
                                    <option value={damage} key={damage}>{damage}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer className="modal-dark">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
