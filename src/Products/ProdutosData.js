import React from 'react'
import './ProdutosData.css'


export default function Product({item}) {
    return (
    <div className='cards'>
      <div className='image-box'> 
        
        <h3>{item.name}</h3>
        <div className="cardsrow">Preço: ${item.finalPrice}</div>
        <div>Disponível: {item.quantityAvailable}</div>
        
        
        <div>
            <button className='button'>Adicionar ao Carrinho</button>
        </div>
        </div>
    </div>
  )
}
