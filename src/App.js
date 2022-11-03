import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Paginas/Home/Home';
import Carrinho from './Paginas/Carrinho/Carrinho';
import Pagamento from './Paginas/Pagamento/Pagamento';
import { Router } from 'react-router-dom';
import AppRouter from './Router';
import Data from './Produtos/Data';


function App() {

  
  return (
    <div className="App">
      <AppRouter />
    
    </div>
  );
}

export default App;
