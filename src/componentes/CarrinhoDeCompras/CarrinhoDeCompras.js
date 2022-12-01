import React from 'react'
import { useReducer, useState } from 'react'


const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {
        quantity: state.quantity + 1,
      }
      case 'decrement':
        return {
          quantity: state.quantity - 1,
        }
      default:
        return state;
  }
}

const CarrinhoDeCompras = () => {
  const [finalPrice,setFinalPrice]=useState([])

  const changePrice = () => {
    setFinalPrice(finalPrice + finalPrice)
  }




  const [state, dispatch] = useReducer(reducer, { quantity: 0 })
  return (
    <div>

      <p>{state.quantity}</p>
      
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>


    </div>
  )
}

export default CarrinhoDeCompras