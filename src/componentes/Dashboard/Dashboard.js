import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
    <a className='resumo' href='/carrinho'>Resumo</a>
    <a className='inforAdicionais' href=''>Produtos</a>
    <a className='inforAdicionais' href=''>Informações Adicionais</a>
    </div>
  )
}

export default Dashboard