import React from 'react'
import './CardsProdutos.css'

function CardsProdutos() {
  return (
    <div className='cardsProdutos'>
      <h1 className='produtos'>Produtos</h1>
      <p className='unidade'>un - R$:</p>
      <div className='imposto'> 
        <p>impostos: R$</p>
        <p>Total: R$ </p>
      </div>
    </div>
  )
}

export default CardsProdutos