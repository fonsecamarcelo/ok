import CardsPagamento from '../../componentes/CardsPagamento/CardsPagamento';
import EnderecoPagamento from '../../componentes/EnderecoPagamento/EnderecoPagamento';
import InformacoesPagamento from '../../componentes/InformacoesPagamento/InformacoesPagamento';
import MenuPagamento from '../../componentes/MenuPagamento/MenuPagamento';

function Pagamento() {
    return (
      <div>
        <MenuPagamento />
        <CardsPagamento />
        <EnderecoPagamento />
        <InformacoesPagamento />
      </div>
   
    );
  }
  
  export default Pagamento