import React, { useContext} from 'react'
import './ProdutosData.css'
import InfoIcon from '@mui/icons-material/Info';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { createContextCart } from '../componentes/CarrinhoDeCompras/CarrinhoDeCompras';


export default function Product({item}) {
  const { addProducToCart, removeProducToCart, productsCart } = useContext(createContextCart) 
  const produtoNoCarrinho = productsCart.find(produto => produto.id === item.id)
  
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

        <div className="cardsrow">
          <p>Base: <div>R${item.finalPrice}</div></p>
          <p>Estoque: <div>{item.quantityAvailable}</div></p>
          <div className='buttonProdutosData'>
            <button className='buttonProdutosDataMais' onClick={() => addProducToCart(item)}>+</button>
          </div>
          <div>
            <button className='buttonProdutosDataMenos' onClick={() => removeProducToCart(item)}>-</button>
          </div>
        
          <p>Valor: <div>R${produtoNoCarrinho ? produtoNoCarrinho.valorTotal : 0}</div></p>
        </div>
      </div>
    </div>
  )
}
