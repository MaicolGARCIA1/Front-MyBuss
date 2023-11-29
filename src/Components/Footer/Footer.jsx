// Footer.jsx
import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/Servicios">Servicios</a></li>
          <li><a href="/Contacto">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
