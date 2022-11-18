import React from 'react' 
import './FiltroDeBusca.css'
import SearchIcon from '@mui/icons-material/Search';

function FiltroDebusca() {
  return (
    <div className='filtrodebusca'>
       <div className='botoespesquisa'>
        <div className='botoespesquisaconteudo'>
          <SearchIcon fontSize= 'large' className='iconeFiltro' />
        <input className='pesquisarFiltro' type='text' placeholder='Pesquisar'/>
      </div>
    </div>

    <div className='inputs'> 
      <p>Ordenar por:</p>
        <div className='filtroNome'> 
          <select className='inputNome' required="required">
            <option value="">Nome (A - Z)</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
            <option value="4">D</option>
            <option value="5">E</option>
            <option value="6">F</option>
          </select>
      </div>


        <div> 
          <select  required="required">
          <option value="">Exibição</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="4">7</option>
          <option value="5">8</option>
          <option value="6">9</option>
        </select>
          
        </div>
        
        </div>
    </div>
  )
}

export default FiltroDebusca

