import React from 'react' 
import './FiltroDeBusca.css'
import SearchIcon from '@mui/icons-material/Search';
import InputOrdenar from '../InputOrdenar/InputOrdenar';
import InputExibicao from '../InputExibicao/InputExibicao';

function FiltroDebusca() {
  return (
    <div className='filtrodebusca'>
       <div className='botoespesquisa'>
      
          <div className='iconeFiltro'> 
            <SearchIcon fontSize= 'large' />
          </div>
        <div> 
          <input className='pesquisarFiltro' type='text' placeholder='Pesquisar'/>
        </div>
    </div>
    
      <InputOrdenar />
      <InputExibicao />
    </div>
  )
}

export default FiltroDebusca

