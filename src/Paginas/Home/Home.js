import SidebarDireito from "../../componentes/SidebarDireito/SidebarDireito";
import FiltroDebusca from "../../componentes/FiltroDeBusca/FiltroDebusca";
import Product from "../../Products/ProdutosData";
import Data from "../../Produtos/Data";
import Paginacao from "../../componentes/Paginacao/Paginacao";

function Home(props) {
  return (
    
      <>
        <SidebarDireito/>
        <FiltroDebusca />
      

        <Paginacao />
      
  
        
      </>

   
    );
  }
  
  export default Home;