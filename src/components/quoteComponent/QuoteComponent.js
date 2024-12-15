import React, { useEffect, useState } from 'react';
import { Piece } from '../../models/Piece';
import { colorState, layers, lines, varnish } from '../../models/state';
import { Button, Modal } from 'react-bootstrap';

const paintState = colorState();

let piece = new Piece("ESPERANDO", "ESPERANDO")

export const QuoteComponent = ({ elementSelect }) => {
    const [gramos, setGramos] = useState("");
    const [horas, setHoras] = useState("");
    const [precio, setPrecio] = useState("");


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (!elementSelect) return;
        if (elementSelect[0] && elementSelect[1]) {
            piece.group = elementSelect[0]
            piece.part = elementSelect[1]
            handleShow();
        }
    }, [elementSelect]);

    return (
        <>
            <div className="QuoteComponent card-menu p-2">
                <ul className="list-group list-group-flush gap-3">
                    <li id="gramosUsados">GRAMOS UTILIZADOS: {gramos} Gr</li>
                    <li id="horasUsadas">HORAS UTILIZADAS: {horas} H</li>
                    <li id="precioTotal">PRECIO TOTAL: {precio} $</li>
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
                            <select className="form-select">
                                {Object.keys(paintState).map((damage) => (
                                    <option value={damage} key={damage}>{damage}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label>TIPO DE CAPA</label>
                            <select className="form-select">
                                {layers.map((damage) => (
                                    <option value={damage} key={damage}>{damage}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label>TIPO DE BARNIZ</label>
                            <select className="form-select">
                                {varnish.map((damage) => (
                                    <option value={damage} key={damage}>{damage}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label>TIPO DE LINEA</label>
                            <select className="form-select">
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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
