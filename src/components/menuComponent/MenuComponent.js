import React, { useEffect, useState } from 'react'
import { QuoteComponent } from '../quoteComponent/QuoteComponent'
import { SelectModel } from '../selectModel/SelectModel'
import "./menuComponent.css"

export const MenuComponent = ({ quoteInfo, userOrder, element }) => {
  //const [currentUserOrder, setCurrentUserOrder] = useState(userOrder)

  const [elementSelected, setElementSelected] = useState([]);

  useEffect(() => {
    setElementSelected(element);

  }, [element]);

  return (

    <div className='menuComponent container-fluid p-3'>
      <div className="row g-4">
        <div className="col-md-5" >
          <QuoteComponent elementSelect={elementSelected} tableQuote={quoteInfo}></QuoteComponent>
        </div>
        <div className="col-md-5">
          <SelectModel order={userOrder}></SelectModel>
        </div>
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <button>Enviar Cotización</button>
        </div>
      </div>

    </div>
  )
}
