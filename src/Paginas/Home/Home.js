import Navbar from '../../componentes/Navbar/Navbar'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import SidebarDireito from '../../componentes/SidebarDireito/SidebarDireito'


function Home() {
    return (
      <div className="App">
        <Navbar/>
        <Sidebar/>
        <SidebarDireito/>
    
        
      </div>
    );
  }
  
  export default Home;