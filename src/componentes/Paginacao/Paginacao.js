import React from 'react'
import './estilo.css'
import { useEffect, useState } from 'react'
import Data from '../../Produtos/Data'
import Product from '../../Products/ProdutosData'

function Paginacao() {
  
  const [ itens, setItens ] = useState([])
  const [itensPerPage,setItensPerPage] = useState(2)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex)

  useEffect(() => {
    
    setItens(Data.products)
  }, [])
  
    return (
    
    <div>

      {currentItens.map(item => {
        return (<Product key={item.id} item={item}/>)
      })}
   
      
      <div className='paginacao'>
        {Array.from(Array(pages),(item, index) => {
          return <button className='botoesPaginacao' value={index} onClick={(e) => setCurrentPage(Number (e.target.value))}>{index +1}</button>
        })}
      </div>
    </div>
      
  )
}

export default Paginacao