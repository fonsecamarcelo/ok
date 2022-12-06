import CarrinhoDeComprasProvider from './componentes/CarrinhoDeCompras/CarrinhoDeCompras'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Router';



function App() {
  return (
    <div className="App">
      <CarrinhoDeComprasProvider>
        <AppRouter />
      </CarrinhoDeComprasProvider>
    
    </div>
  );
}

export default App;
