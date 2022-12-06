import MenuCarrinho from '../../componentes/MenuCarrinho/MenuCarrinho';
import Dashboard from '../../componentes/Dashboard/Dashboard';
import CardsProdutos from '../../componentes/CardsProdutos/CardsProdutos';
import CardsCliente from '../../componentes/CardsCliente/CardsCliente';
import CardsValor from '../../componentes/CardsValor/CardsValor';
import './estilo.css'


function Carrinho() {
    return (
      <>
        <MenuCarrinho />
        <Dashboard />
        <div className='componentes'> 
        <CardsProdutos />
          <CardsValor />
        </div>
        <CardsCliente />
      </>
    );
  }
  
  export default Carrinho;