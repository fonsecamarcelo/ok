import React from 'react' 
import './FiltroDeBusca.css'
import SearchIcon from '@mui/icons-material/Search';

function FiltroDebusca() {
  return (
    <div className='filtrodebusca'>
       <ul className='botoespesquisa'>
        <li className='botoespesquisaconteudo'>
          <SearchIcon className='icone'/>
       <input type='text' placeholder='Pesquisar'/>
       <select id="selecao" required="required">
          <option value="">Nome (A - Z)</option>
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
          <option value="4">D</option>
          <option value="5">E</option>
          <option value="6">F</option>
          </select>

          <select id="exibicao" required="required">
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
          </li>
       </ul>
        
        
    </div>
  )
}

export default FiltroDebusca