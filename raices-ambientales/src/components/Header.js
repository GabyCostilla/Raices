import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header>
      <div className="logo">Raíces</div>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/events">Eventos</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
