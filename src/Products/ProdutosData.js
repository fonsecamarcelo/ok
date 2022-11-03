import React from 'react'


export default function Product({item}) {
    return (
    <div className='cards'>
      <ul className='image-box'> 
        <img className='small' src={item.imageURL} alt={item.name}></img>
        <h3>{item.name}</h3>
        <div>{item.finalPrice}</div>
        <div>{item.quantityAvailable}</div>
        <div>
            <button className='button'>Adicionar ao Carrinho</button>
        </div>
        </ul>
    </div>
  )
}
