import SidebarDireito from "../../componentes/SidebarDireito/SidebarDireito";
import FiltroDebusca from "../../componentes/FiltroDeBusca/FiltroDebusca";
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