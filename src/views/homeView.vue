<template>
  <div class="home-page">
    <header class="hero-section">
      <div class="hero-content">
        <h1>Bienvenido a Nuestra Ferreteria Ferremas</h1>
        <p class="slogan">Revisa nuestros productos.</p>
        <router-link to="/features" class="btn primary-btn">Descubre nuestras características</router-link>
        <router-link to="/contact" class="btn secondary-btn">Contáctanos</router-link>
      </div>
    </header>

    <section class="overview-section">
      <div class="container">
        <h2>¿Qué podemos hacer por ti?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Gestión Inteligente de Seguros y Garantías</h3>
            <p>Automatiza la asociación de pólizas, valida condiciones en tiempo real y agiliza las aprobaciones digitales.</p>
            <ul>
              <li><i class="fas fa-check-circle"></i> Reducción de errores</li>
              <li><i class="fas fa-check-circle"></i> Aprobaciones 50% más rápidas</li>
              <li><i class="fas fa-check-circle"></i> Mayor confianza del cliente</li>
            </ul>
          </div>
          <div class="feature-card">
            <h3>Plataforma de Fidelización Conectada</h3>
            <p>Premia la lealtad, segmenta a tus clientes y activa campañas de retención basadas en su comportamiento.</p>
            <ul>
              <li><i class="fas fa-check-circle"></i> Puntos automáticos por interacción</li>
              <li><i class="fas fa-check-circle"></i> Segmentación dinámica de clientes</li>
              <li><i class="fas fa-check-circle"></i> Campañas de retención proactivas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>¿Listo para transformar tu negocio?</h2>
        <p>Solicita una demostración personalizada y descubre cómo SSSF puede impulsar tu eficiencia y la satisfacción de tus clientes.</p>
        <router-link to="/demo" class="btn large-btn">Solicitar Demostración</router-link>
      </div>
    </section>

    <footer class="app-footer">
      <div class="container">
        <p>&copy; 2025 Solución SSSF. Todos los derechos reservados.</p>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage', // Nombre del componente (útil para depuración)
  data() {
    return {
      // Puedes añadir datos dinámicos si los necesitas en la página de inicio
      // Por ejemplo, estadísticas, novedades, etc.
    };
  },
  methods: {
    // Puedes añadir métodos si la página de inicio tiene interactividad específica
  },
  mounted() {
    // Código a ejecutar cuando el componente se monta en el DOM
    console.log('La página de inicio de SSSF ha sido montada.');
  }
};
</script>

<style scoped>
/* Estilos generales de la página home */
.home-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Estilos de la sección Hero */
.hero-section {
  background: linear-gradient(to right, #0056b3, #007bff); /* Azul corporativo */
  color: white;
  text-align: center;
  padding: 100px 20px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.hero-content h1 {
  font-size: 3.5em;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-content .slogan {
  font-size: 1.5em;
  margin-bottom: 40px;
  font-weight: 300;
}

.btn {
  display: inline-block;
  padding: 12px 25px;
  margin: 0 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.primary-btn {
  background-color: #28a745; /* Verde para la acción principal */
  color: white;
  border: none;
}

.primary-btn:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

.secondary-btn {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.secondary-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Estilos de la sección Overview */
.overview-section {
  padding: 80px 20px;
  background-color: #f8f9fa; /* Gris claro */
  text-align: center;
}

.overview-section h2 {
  font-size: 2.5em;
  margin-bottom: 50px;
  color: #0056b3;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-card h3 {
  color: #0056b3;
  font-size: 1.8em;
  margin-bottom: 15px;
}

.feature-card ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.feature-card ul li {
  margin-bottom: 10px;
  color: #555;
}

.feature-card ul li i {
  color: #28a745;
  margin-right: 8px;
}

/* Estilos de la sección CTA (Call to Action) */
.cta-section {
  background: #007bff; /* Azul vibrante */
  color: white;
  text-align: center;
  padding: 80px 20px;
}

.cta-section h2 {
  font-size: 2.8em;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.2em;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.large-btn {
  padding: 15px 40px;
  font-size: 1.3em;
  background-color: #ffc107; /* Amarillo para destacar */
  color: #333;
  border: none;
}

.large-btn:hover {
  background-color: #e0a800;
  transform: translateY(-3px);
}

/* Estilos del Footer */
.app-footer {
  background-color: #343a40; /* Gris oscuro */
  color: white;
  padding: 30px 20px;
  text-align: center;
  font-size: 0.9em;
}

.app-footer .social-links a {
  color: white;
  font-size: 1.5em;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.app-footer .social-links a:hover {
  color: #007bff;
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5em;
  }
  .hero-content .slogan {
    font-size: 1.2em;
  }
  .btn {
    display: block;
    margin: 15px auto;
  }
  .features-grid {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
  }
  .cta-section h2 {
    font-size: 2em;
  }
}
</style>