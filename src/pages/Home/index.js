import React from "react";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Olá Mundo - Pagina Home</h1>
      <br /><br />

      <Link to="/Sobre">Sobre</Link>
      <br />
      <Link to="/Contato">Contato</Link>
    </div>
  );
}

export default Home;
