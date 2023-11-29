import React from 'react';
import ScrollToSection from './ScrollToSection';
import './Header.css'; 


const Header = () => {
  return (
    <header className="header"> {/* Aquí aplica la clase "header" */}
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/128/12678/12678413.png?uid=R114925294&ga=GA1.1.1263288459.1700172831&semt=ais" alt="" />
        <h1>MyBuss</h1>
      </div>
      <nav className="nav-links">
      <ul>
      <li>
          <ScrollToSection target="Inicio" />
        </li>
        <li>
          <ScrollToSection target="Servicios" />
        </li>
        <li>
          <ScrollToSection target="¿Quienes Somos?" />
        </li>
        <li>
          <ScrollToSection target="Contacto" />
        </li>
        <li className="special-link1">
          <ScrollToSection target="Acceder" />
        </li>
        <li className="special-link2">
          <ScrollToSection target="Registrarse" />
        </li>
      </ul>
    </nav>

    </header>
  );
};

export default Header;
