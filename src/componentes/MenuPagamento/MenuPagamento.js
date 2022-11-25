import React from 'react'
import './MenuPagamento.css'
import SendIcon from '@mui/icons-material/Send';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function MenuPagamento() {
  return (
    <div className='menuPagamento'> 
         <div className='botaoVoltarPagamento'>
            <KeyboardBackspaceIcon href="/" />
            <a className="nav-link" href="/Carrinho">Voltar</a>
          </div>

        <div className='enviarPedido'>
          <a className='botaoEnviarPagamento'>Enviar Pedido</a>
          <SendIcon className='sendIcon'/>
        </div>
        </div>
  )
}

export default MenuPagamento