import "./Navbar.css"
import Logo from "../Logo"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Navbar = (props) => {
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Logo  className="navbar-brand"></Logo>
  
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
              <div class="navbarIcones" id="navbarNav">
                <ul class="navbar-nav">
      
                  <li class="nav-item">
                    <a class="nav-link" href="/Carrinho"><ShoppingCartIcon /></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/notificacao"><NotificationsIcon /></a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/usuario"><AccountCircleIcon  fontSize="large"/></a>
                </li>
                </ul>
              </div>
          </nav>
      </div>
    )
}

export default Navbar
