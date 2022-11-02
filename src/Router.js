import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Paginas/Home/Home'
import Carrinho from './Paginas/Carrinho/Carrinho'
import Pagamento from './Paginas/Pagamento/Pagamento'
import Produtos from './Produtos/Produtos'
import { CarrinhoProvider } from './componentes/Common/Context/CarrinhoContext'
import { Fragment } from 'react'

function Router() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={ <Home />}/>
                    <Route exact path="/carrinho" element={ <Carrinho />}/>
                    <Route exact path="/pagamento" element={ <Pagamento />}/>
                    
                    
                     {/*<Route exact path="/whoisme" element={<Private Item={WhoIsMe}/>}/>
                    <Route exact path="/find-flight" element={<Private Item={FindFlignts}/>}/>
                    <Route exact path="/configuration" element={<Private Item={Configuration}/>}/>
                    <Route path={"/"} element={<Private Item={LoginPrivateRoute}/>}/>*/}
                </Routes>
                
                
                
                
                
                
                
                {/*<Route exact path='/'>
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
                </Route> */}
            </Fragment>
        </BrowserRouter>
    )
}

export default Router