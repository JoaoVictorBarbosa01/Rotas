import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Pagina Contatos</h1>
            <span>Contato da empresa (dd) xxxx-xxxx</span><br /><br />
            <br /><br />

            <Link to="/">Home</Link>
            <br />
            <Link to="/Sobre">Sobre</Link>
        </div>
    )
}

export default Contato;