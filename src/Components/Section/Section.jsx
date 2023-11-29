import React from 'react';
import './Section.css'; 

const Section = () => {
  return (
    <div id="Inicio" className="home-page">
          <div className="welcome-message">
          <div className="background-image"></div>
          <h2>Bienvenido a My<span>Buss</span></h2>
          <p className='D'>
             Descubre y planifica tus rutas con nosotros. Con nuestra plataforma innovadora, <br /> podrás explorar nuevos destinos, encontrar las mejores rutas y personalizar tu experiencia de viaje. <br /> ¡Viaja con comodidad y eficiencia con MyBuss!
             <br />  <button className='Conoce-mas'><img src="https://cdn-icons-png.flaticon.com/128/5193/5193890.png" alt="" /></button>
        </p>
       
         </div>
    </div>
  );
};

export default Section;

