import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Hola, soy Erik</h1>
        <p>Desarrollador web en formación</p>
      </div>
    </header>
  );
}

export default Header;
