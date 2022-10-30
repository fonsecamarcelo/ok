import './App.css';
import Logo from './componentes/Logo'
import perfil from './imagens/perfil.png'
import carrinho from './imagens/carrinho.png'
import sino from './imagens/sino.png'

const icones= [ carrinho, sino, perfil ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo></Logo>
      
      <ul className="icones">
        { icones.map( (icone) => (
          <li className="icone"><img src={ icone } alt="icone"></img></li>
        )) }
      </ul>
      </header>
     
    </div>
  );
}

export default App;
