import FiltroDebusca from "../../componentes/FiltroDeBusca/FiltroDebusca";
import Product from "../../Products/ProdutosData";
import Data from "../../Produtos/Data";
function Home(props) {
  
  return (
    
        <>
        <FiltroDebusca />
        {Data.products.map ((item) =>(
          <Product item={item}/>
        ))}
        </>

   
    );
  }
  
  export default Home;