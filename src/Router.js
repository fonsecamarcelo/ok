import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Paginas/Home/Home'
import Carrinho from './Paginas/Carrinho/Carrinho'
import Pagamento from './Paginas/Pagamento/Pagamento'
import Produtos from './Produtos/Produtos'
import { CarrinhoProvider } from './componentes/Common/Context/CarrinhoContext'
import { Fragment } from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Sidebar from './componentes/Sidebar/Sidebar'
import SidebarDireito from './componentes/SidebarDireito/SidebarDireito'

function Router() {
    return (
        <BrowserRouter>
            <Fragment>
                <Navbar />
                <Sidebar />
                <SidebarDireito />
                <Routes>
                    
                    <Route exact path="/home" element={ <Home />}/>
                    <Route exact path="/carrinho" element={ <Carrinho />}/>
                    <Route exact path="/pagamento" element={ <Pagamento />}/>
                    
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default Router