import React from 'react';
import Footer from './components/Footer';
import Tree from './Tree';  
import './Home.css'; 

const Home = () => {
  return (
    <div>

      <div className="home-container">
        <div className="home-title">🌱 Bienvenido a Raíces - Comisión de Medio Ambiente</div>
        <div className="home-description">
          Raíces se dedica al cuidado del medio ambiente y la promoción de prácticas sostenibles.
          Descubre nuestras actividades y contribuciones al cuidado del planeta.
        </div>

        <div className="home-section">
          <div className="home-section-title">🌍 Nuestra Misión</div>
          <div className="home-section-content">
            Trabajamos para crear conciencia sobre la importancia de preservar nuestro entorno y
            llevamos a cabo diversas actividades para contribuir a un mundo más sostenible.
          </div>
        </div>

        <div className="home-section">
          <div className="home-section-title">🤝 Cómo Participar</div>
          <div className="home-section-content">
            Únete a nosotros en nuestras próximas actividades y eventos. Juntos, podemos marcar la diferencia
            en la protección de nuestro entorno.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
