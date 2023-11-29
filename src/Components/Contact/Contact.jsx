import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div id="Contacto" className="contact-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="social-links">
        <p>"En nuestra misión por mejorar la movilidad urbana, estamos comprometidos con brindar soluciones innovadoras. ¡Contáctanos para cualquier consulta, colaboración o sugerencia! Estamos aquí para ayudarte a mejorar tu experiencia en el transporte público."</p>
        <h3>Síguenos en redes sociales:</h3>
        {/* Aquí puedes colocar los botones o enlaces a tus redes sociales */}
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.facebook.com/">Facebook</a>
        {/* Agrega más botones o enlaces según sea necesario */}
      </div>
    </div>
  );
};

export default Contact;
