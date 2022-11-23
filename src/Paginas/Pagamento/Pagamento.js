import './estilo.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Pagamento() {
    return (
      <div className='botaoVoltar'>
        <KeyboardBackspaceIcon href="/" />
        <a class="nav-link" href="/Carrinho">Voltar</a>
      </div>
      
   
    );
  }
  
  export default Pagamento