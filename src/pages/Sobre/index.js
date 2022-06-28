import React from "react";
import {Link} from 'react-router-dom';

function Sobre() {
  return (
    <div>
      <h1>Olá Mundo - Pagina Sobre</h1>
      <br /><br />

      <Link to="/">Home</Link>
      <br />
      <Link to="/Contato">Contato</Link>
    </div>
  );
}

export default Sobre;
