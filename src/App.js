import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Paginas/Home/Home';
import Carrinho from './Paginas/Carrinho/Carrinho';
import Pagamento from './Paginas/Pagamento/Pagamento';


function App() {
  return (
    <div className="App">
      <Home />
      <Carrinho />
      <Pagamento />
      

      
    </div>
  );
}

export default App;
