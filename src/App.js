import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './componentes/Sidebar/Sidebar';
import SidebarDireito from './componentes/SidebarDireito/SidebarDireito';
import Carrinho from './componentes/Carrinho/Carrinho';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <SidebarDireito/>
     <Carrinho/>
      
    </div>
  );
}

export default App;
