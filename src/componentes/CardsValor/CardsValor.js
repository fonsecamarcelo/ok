import React from 'react'
import './CardsValor.css'

function CardsValor() {
  return (
    <div className='cardsValor'>
        <h1 className='valores'>Valores</h1>
        <div className='totalValores'>
            <p>Total <br></br> (sem impostos)<br></br>R$</p>
            <p className='impostosValor'>Impostos <br></br> R$</p>
        </div>
        <div className='valorTotal'>
            <p>Total:</p>
        </div>
    </div>
  )
}

export default CardsValor