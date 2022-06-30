import { Link } from 'react-router-dom';

function Erro (){
    return(
        <div>
            <h1>Ops... Parece que esta paágina não existe</h1>

            <span>As paginas existentes são:</span> <br />
            <Link to="/">Home</Link> <br />
            <Link to="/Sobre">Sobre</Link> <br />
            <Link to="/Contato">Contato</Link> <br />
        </div>
    )
}

export default Erro;
