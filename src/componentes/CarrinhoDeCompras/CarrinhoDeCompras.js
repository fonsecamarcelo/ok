import { createContext, useState, useEffect } from "react";
import Data from "../../Data/Data";

export const createContextCart = createContext();

export default function CartProvider({ children }) {
  const [ productsCart, setProductsCart ] = useState([])
  
  function addProducToCart(product){

    const productsCartCopy = productsCart;
    const produtoIndex = productsCartCopy.findIndex(produto => produto.id === product.id)

    if( produtoIndex >= 0  ) {
      const novoQtd = productsCartCopy[produtoIndex].qtd + 1;

      productsCartCopy[produtoIndex] = {...productsCartCopy[produtoIndex], qtd: novoQtd, valorTotal: productsCartCopy[produtoIndex].valorUnitario * novoQtd }
      console.log(productsCartCopy)
      setProductsCart(productsCartCopy)
    } else {
      const productsCartsModificado = [...productsCartCopy, {id: product.id, name: product.name, qtd: 1, valorUnitario: product.finalPrice, valorTotal: product.finalPrice}]
      setProductsCart(productsCartsModificado)
    }
  }

  function removeProducToCart(product) {
    const productsCartCopy = [...productsCart];
    const produtoIndex = productsCartCopy.findIndex(produto => produto.id === product.id)
    if( produtoIndex >= 0  )
      
     {
        productsCartCopy[produtoIndex] = {...productsCartCopy[produtoIndex], qtd: productsCartCopy[produtoIndex].qtd - 1 }
        setProductsCart(productsCartCopy)
    } else {
      const productsCartsModificado = [...productsCartCopy, {id: product.id, name: product.name, qtd: 1, valorUnitario: product.finalPrice}]
      setProductsCart(productsCartsModificado)
    }
    

  }
  

  return (
    <createContextCart.Provider
      value={{ productsCart, addProducToCart, removeProducToCart}}
      >  
        {children}
      </createContextCart.Provider>
  )
}