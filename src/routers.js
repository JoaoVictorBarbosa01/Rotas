import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './components/Header';
import Produto from './pages/Produto';
import Erro from './pages/Erro';

function RoutersApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/Sobre' element={ <Sobre/> } />
                <Route path='/Contato' element={ <Contato/> } />
                <Route path='/Produto/:id' element={ <Produto /> }/>
                <Route path='*' element={ <Erro /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutersApp;