import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './componentes/Sidebar/Sidebar';
import SidebarDireito from './componentes/SidebarDireito/SidebarDireito';
import Produto from './componentes/Produtos/Produto';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <SidebarDireito/>
      <Produto/>
      
    </div>
  );
}

export default App;
