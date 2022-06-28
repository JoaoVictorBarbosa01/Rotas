import { Link } from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <h2>Olá Mundo - Header do Site</h2>

            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Contato">Contato</Link>
            </div>
        </header>
    )
}


export default Header;