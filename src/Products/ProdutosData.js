import React from 'react'
import './ProdutosData.css'
import InfoIcon from '@mui/icons-material/Info';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CarrinhoDeCompras from '../componentes/CarrinhoDeCompras/CarrinhoDeCompras';


export default function Product({item}) {
    return (
    <div className='cards'>
      <div className='image-box'> 
        <div className='idENome'> 
        <p className='idProdutos'>{item.id}</p>
        <h3 className='nomeItem'>{item.name}</h3>
        <div className='iconesBarcode'>
          <CropFreeIcon />
        </div>

        <div className='iconeInfo'>
          <InfoIcon />
        </div>
      </div>
        <div className="cardsrow">Base: R${item.finalPrice}
        <p>Estoque: {item.quantityAvailable}</p>
        <CarrinhoDeCompras />
      </div>
      
          
      </div>
    </div>
  )
}
