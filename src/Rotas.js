import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Paginas/Home/Home'
import Carrinho from './Paginas/Carrinho/Carrinho'
import Pagamento from './Paginas/Pagamento/Pagamento'
import Produtos from './Produtos/Produtos'
import { CarrinhoProvider } from './componentes/Common/Context/CarrinhoContext'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                <Home />
                </Route>
               
                <CarrinhoProvider>
                <Route path='/carrinho'>
                    <Carrinho />
                </Route>
                </CarrinhoProvider>

                <Route path='/pagamento'>
                    <Pagamento />
                </Route>

                <Route path='/produtos'>
                    <Produtos />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router