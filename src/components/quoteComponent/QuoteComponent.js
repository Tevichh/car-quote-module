import React, { useEffect, useState } from 'react';
import { Piece } from '../../models/Piece';
import { colorState, layers, lines, varnishes } from '../../models/state';
import { Button, Modal } from 'react-bootstrap';
import { changePieceCar, sumarCotizacion } from '../../services/damage';
import { userModelOrder } from '../../App';
import { groupParts } from '../../models/groupParts';

const paintState = colorState();

let piece = new Piece("ESPERANDO", "ESPERANDO")


export const QuoteComponent = ({ elementSelect, tableQuote }) => {

    const [paint, setPaint] = useState("Default");
    const [layer, setLayer] = useState("Monocapa");
    const [line, setLine] = useState("Baslac");
    const [varnish, setVarnish] = useState("40-22");


    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); reiniciarValores() };
    const handleShow = () => setShow(true);

    const reiniciarValores = () => {
        setPaint("Default");
        setLayer("Monocapa");
        setLine("Baslac");
        setVarnish("40-22");
    }

    const handleSave = () => {

        piece.paint = paint;
        piece.layer = layer;
        piece.line = line;
        piece.varnish = varnish;

        reiniciarValores()

        seleccionarPieza()
        handleClose()
    }

    useEffect(() => {
        if (!elementSelect) return;
        if (elementSelect[0] && elementSelect[1]) {
            piece.group = elementSelect[0]
            piece.part = elementSelect[1]
            handleShow();
        }
    }, [elementSelect]);

    const seleccionarPieza = () => {
        userModelOrder[piece.group][piece.part] = piece.generateJson();

        if (userModelOrder[piece.group][piece.part].paint !== "Default") {
            changePieceCar(piece.group, piece.part);
            sumarCotizacion(userModelOrder, tableQuote)
        }else{
            changePieceCar(piece.group, piece.part, userModelOrder["color"]);
            sumarCotizacion(userModelOrder, tableQuote)
        }


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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{piece.group + " " + piece.part}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

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
                <Modal.Footer>
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
