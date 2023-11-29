import React from 'react';
import './AboutUs.css'; // Asegúrate de que la ruta sea correcta

const AboutUs = () => {
  return (
    <div id="¿Quienes Somos?" className="about-us-container">
        <div className="mission-vision">
        <div className="mission">
          <h2>Nuestra Misión</h2>
          <p>
            Nuestra misión se centra en desarrollar y ofrecer una aplicación web de vanguardia, MyBuss, destinada a la población de Armenia/Quindío. Esta aplicación proporcionará a los usuarios acceso en tiempo real a información esencial sobre rutas, horarios, paradas y tiempos de llegada de los distintos medios de transporte público en la ciudad. Nos comprometemos a simplificar la movilidad urbana y mejorar la experiencia de los usuarios al utilizar el transporte público.
          </p>
        </div>
        <div className="vision">
          <h2>Nuestra Visión</h2>
          <p>
            Enfocamos nuestra visión en consolidarnos como una plataforma líder, ofreciendo soluciones innovadoras en el ámbito del transporte público. Buscamos no solo optimizar el acceso a la información, sino también contribuir al avance de la infraestructura y los servicios de movilidad urbana en la región, promoviendo una experiencia de transporte eficiente y de calidad para nuestros usuarios.
          </p>
        </div>
        <div class="additional-info">
          <h2>¿Qué nos impulsa?</h2>
          <p>
            Nuestra pasión por crear un cambio positivo en la forma en que la gente se mueve por la ciudad nos motiva constantemente. Creemos firmemente que la innovación y la accesibilidad en el transporte pueden mejorar la vida de las personas y contribuir al crecimiento de nuestra comunidad. Estamos decididos a convertirnos en un catalizador para un sistema de transporte público más eficiente, confiable y centrado en las necesidades de nuestros usuarios.
          </p>
  </div>
      </div>
      <h2 className='Tit'>Nuestro Equipo</h2>
      <div className='team-container'>
      <div className="team-members">
        <div className="team-member">
          <img src="https://img.freepik.com/foto-gratis/vista-3d-nino-utilizar-computador-portatil_23-2150709886.jpg?size=626&ext=jpg&uid=R114925294&ga=GA1.1.1263288459.1700172831&semt=ais" alt="Nombre del miembro del equipo" />
          <h3>Maicol Garcia</h3>
          <p> Desarrollador Frontend</p>
          <div className="social-buttons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" />
          </a>
            <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="WhatsApp" />
            </a>
        </div>
        </div>
        <div className="team-member">
          <img src="https://img.freepik.com/foto-gratis/vista-3d-hombre-tenencia-computador-portatil_23-2150709818.jpg?size=626&ext=jpg&uid=R114925294&ga=GA1.1.1263288459.1700172831&semt=ais" alt="" />
          <h3>Samuel Montes</h3>
          <p> Desarrollador Backend</p>
          <div className="social-buttons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" />
          </a>
            <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="WhatsApp" />
            </a>
        </div>
        </div>
        <div className="team-member">
            <img src="https://img.freepik.com/foto-gratis/vista-3d-hombre-negocios_23-2150709814.jpg?size=626&ext=jpg&uid=R114925294&ga=GA1.1.1263288459.1700172831&semt=ais" alt="" />
          <h3>Juan Sebastian</h3>
          <p> Desarrollador Backend</p>
          <div className="social-buttons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" />
          </a>
            <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="WhatsApp" />
            </a>
        </div>
        </div>
        <div className="team-member">
            <img src="https://img.freepik.com/foto-gratis/vista-3d-hombre-negocios_23-2150709830.jpg?w=740&t=st=1701022420~exp=1701023020~hmac=e59647675601baee9b8c015246790f5d2d3f5e51f395307c99e14df3cffa1437" alt="" />
          <h3>Bayron Galeano</h3>
          <p> Documentador</p>
          <div className="social-buttons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" />
          </a>
            <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="WhatsApp" />
            </a>
        </div>
        </div>
        <div className="team-member">
            <img src="https://img.freepik.com/fotos-premium/nino-dibujos-animados-gafas-sentado-frente-computadora-generativa-ai_900101-60056.jpg?size=626&ext=jpg&uid=R114925294&ga=GA1.1.1263288459.1700172831&semt=ais" alt="" />
          <h3>Juan Henao</h3>
          <p>Documentador</p>
          <div className="social-buttons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" />
          </a>
            <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="WhatsApp" />
            </a>
        </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default AboutUs;
