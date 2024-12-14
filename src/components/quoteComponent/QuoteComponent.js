import React, { useState } from 'react'

export const QuoteComponent = () => {
    const [gramos, setGramos] = useState("");
    const [horas, setHoras] = useState("");
    const [precio, setPrecio] = useState("");
    return (
        <div className='QuoteComponent card-menu p-2'>

            <ul className="list-group list-group-flush gap-3">
                <li id='gramosUsados'>GRAMOS UTILIZADOS: {gramos} Gr</li>
                <li id="horasUsadas">HORAS UTILIZADAS: {horas} H</li>
                <li id="precioTotal">PRECIO TOTAL: {precio} $</li>
            </ul>
        </div>
    )
}
