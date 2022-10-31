import "./Navbar.css"
import Logo from "../Logo"

const Navbar = (props) => {
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Logo  className="navbar-brand"></Logo>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item">
        <a class="nav-link" href="#/">Meu Carrinho</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/notificacao">Notificação</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#/usuario">Usuario</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
