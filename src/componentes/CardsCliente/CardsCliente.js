import React from 'react'
import './CardsCliente.css'

function CardsCliente() {
  return (
    <div className='cliente'>
        <div className='topCliente'> 
            <h1 className='tituloCliente'>Cliente</h1>
            <a className='detalhesCliente' href=''>Ver Detalhes</a>
        </div>
        <a className='id'>ID</a>
        <p className='numeroId'>94028</p>
        <div className='botCliente'>
            <p className='RazãoSocial'>Razão Social <br></br>FARMACIA DA ILHA</p>
            <p className='cnpj'>cnpj <br></br>00.000.000/0000-00
            </p>
        </div>
    </div>
  )
}

export default CardsCliente