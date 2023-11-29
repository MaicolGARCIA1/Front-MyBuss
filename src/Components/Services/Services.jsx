// Services.js

import React from 'react';
import './Services.css'; // Asegúrate de que la ruta sea correcta

const Services = () => {
  const servicesData = [
    {
      title: 'Horarios de la Ciudad',
      description: 'Consulta los horarios de transporte público y lugares de interés en la ciudad.',
      icon: 'https://cdn-icons-png.flaticon.com/128/4867/4867322.png?ga=GA1.1.990606510.1700933728&semt=ais',
      link: '/horarios-ciudad'
    },
    {
      title: 'Rutas Alternativas',
      description: 'Explora diferentes rutas para llegar a tu destino de manera eficiente.',
      icon: 'https://cdn-icons-png.flaticon.com/128/4668/4668475.png?ga=GA1.1.990606510.1700933728&semt=ais',
      link: '/horarios-ciudad'
    },
    {
      title: 'Sitios de Interés',
      description: 'Descubre los lugares más emblemáticos y sitios turísticos de la ciudad.',
      icon: 'https://cdn-icons-png.flaticon.com/128/12679/12679368.png?ga=GA1.1.990606510.1700933728&semt=ais',
      link: '/horarios-ciudad'
    },
    {
      title: 'Asistencia al Viajero',
      description: 'Servicio de asistencia y soporte en caso de incidencias durante el viaje.',
      icon: 'https://cdn-icons-png.flaticon.com/128/895/895263.png?ga=GA1.1.990606510.1700933728&semt=ais',
      link: '/horarios-ciudad'
    }
  ];
  const testimonies = [
    {
      name: 'Laura Smith',
      comment: '¡Increíble servicio! Las rutas alternativas me han permitido conocer lugares fascinantes.',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1993/1993341.png',
      social: {
        twitter: 'https://twitter.com/i/flow/login',
        instagram: 'https://www.instagram.com/accounts/login/',
      },
    },
    {
      name: 'Carlos Johnson',
      comment: 'Siempre utilizo los horarios de la ciudad para moverme, ¡es muy útil!',
      avatar: 'https://cdn-icons-png.flaticon.com/128/4086/4086679.png',
      social: {
        twitter: 'https://twitter.com/i/flow/login', // Enlace real de Twitter de Carlos
        instagram: 'https://www.instagram.com/accounts/login/', // Enlace real de Instagram de Carlos
      },
    },
    {
      name: 'Ana Davis',
      comment: 'Me encanta la asistencia al viajero, me hace sentir segura en cada viaje.',
      avatar: 'https://cdn-icons-png.flaticon.com/128/921/921089.png',
      social: {
        twitter: 'https://twitter.com/i/flow/login', // Enlace real de Twitter de Ana
        instagram: 'https://www.instagram.com/accounts/login/', // Enlace real de Instagram de Ana
      },
    },
  ];
  

  return (
    <div  id="Servicios" className="services-container">
    <div className="service-header">
      <h2>Descubre nuestros servicios</h2>
      <p>Explora las diversas opciones que ofrecemos para hacer tu viaje más fácil y cómodo:</p>
    </div>
    <div className="service-cards">
      {servicesData.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.icon} alt={service.title} />
          <div className="service-details">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link}>
                <button className="service-link">
                  <img src="https://cdn-icons-png.flaticon.com/128/190/190159.png?ga=GA1.1.990606510.1700933728&semt=ais" alt="" />
                </button>
              </a>
          </div>
        </div>
      ))}
    </div>

    {/* <div className="testimonials">
      <h2>Testimonios de nuestros usuarios</h2>
      <div className="testimonial-cards">
        {testimonies.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
            <div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.comment}</p>
              {testimonial.social && ( // Verifica si existe la propiedad 'social'
                <div className="social-links">
                  {testimonial.social.twitter && ( // Verifica si existe el enlace de Twitter
                    <a href={testimonial.social.twitter}><img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png?ga=GA1.1.990606510.1700933728&semt=ais" alt="Twitter" /></a>
                  )}
                  {testimonial.social.instagram && ( // Verifica si existe el enlace de Instagram
                    <a href={testimonial.social.instagram}><img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png?ga=GA1.1.990606510.1700933728&semt=ais" alt="Instagram" /></a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div> */}
</div>
  );
};

export default Services;
