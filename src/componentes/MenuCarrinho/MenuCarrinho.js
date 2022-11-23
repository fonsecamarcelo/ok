import React from 'react'
import './MenuCarrinho.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function MenuCarrinho() {
  return (
    <div className="MenuCarrinho">
    <div className='botaoVoltar'>
      <KeyboardBackspaceIcon href="/" />
      <a class="nav-link" href="/">Voltar</a>
    </div>

    <div className='pagamento'>
      <a className='botaoPagamento' href='/Pagamento'>Ir para pagamento</a>
      <ArrowForwardIcon />
    </div>

    <div className='limpar'>
      <a>Limpar Carrinho</a>
      <DeleteOutlineIcon />
    </div>
  </div>
  )
}

export default MenuCarrinho