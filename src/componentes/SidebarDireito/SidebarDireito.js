import React, { useState } from 'react'
import './SidebarDireito.css'

function SidebarDireito() {
    

   

    
  return (
    <div className='SidebarDireito'>
        <ul className='SidebarListDireito'> 
            <li className='SidebarDireitoConteudo'> 
            <p>AÇÕES COMERCIAIS</p></li>
            <div className='form-check-acoes'>
                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">EM PROMOÇÃO</label><br></br>

                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">EM OFERTA</label>
            </div>
            
            <div className='estoque'> 
            <p className='estoquep'>ESTOQUE</p>
                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">ESTOQUE DISPONIVEL</label>
            </div>

            <div className='categorias'> 
            <p className='categoriasp'>CATEGORIAS</p>
                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">GENÉRICOS</label><br></br>

                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">SIMILARES</label><br></br>

                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">PSICOTRÓPICOS</label><br></br>

                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">HIGIENE E BELEZA</label><br></br>


            </div>


            
                
            
        </ul> 
    </div>
  )
}

export default SidebarDireito