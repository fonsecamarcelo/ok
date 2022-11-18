import './estilo.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Carrinhoimg(){
    return(
        <div className="carrinhoImg">
        <img src={AddShoppingCartIcon} alt="carrinho" className="Carrinho-img"/>

      </div>
    )
}

export default Carrinhoimg
