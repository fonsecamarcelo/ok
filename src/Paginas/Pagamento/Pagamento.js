import './estilo.css'
import CardsPagamento from '../../componentes/CardsPagamento/CardsPagamento';
import CardsValor from '../../componentes/CardsValor/CardsValor';
import EnderecoPagamento from '../../componentes/EnderecoPagamento/EnderecoPagamento';
import InformacoesPagamento from '../../componentes/InformacoesPagamento/InformacoesPagamento';
import MenuPagamento from '../../componentes/MenuPagamento/MenuPagamento';

function Pagamento() {
    return (
      <div>
        <MenuPagamento />
        <div className='componentesPagamento'> 
          <CardsPagamento />
          <CardsValor />
        </div>
        <EnderecoPagamento />
        <InformacoesPagamento />
      </div>
   
    );
  }
  
  export default Pagamento