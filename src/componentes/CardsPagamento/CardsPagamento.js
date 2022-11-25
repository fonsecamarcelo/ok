import React from 'react'
import './CardsPagamento.css'

function CardsPagamento() {
  return (
    <div className='cardsPagamento'>
        <h3>Opção de Pagamento</h3>
        <p>O valor total dos produtos é de R$  (com impostos).</p>

        <div className='selecionePagamento'> 
        <h4>Selecione a forma de pagamento desejada:</h4>
        <select className='selectPagamento' required="required">
            <option value="">Selecione a forma de pagamento</option>
            <option value="1">Boleto</option>
            <option value="2">Cartão de crédito</option>
            <option value="3">Cartão de débito</option>
            <option value="4">Pix</option>
        </select>
        </div>

    </div>
  )
}

export default CardsPagamento