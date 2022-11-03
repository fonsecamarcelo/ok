import Product from "../../Products/ProdutosData";
import Data from "../../Produtos/Data";
function Home(props) {
  
  return (
    
        <>
        
        {Data.products.map ((item) =>(
          <Product item={item}/>
        ))}
        </>

   
    );
  }
  
  export default Home;