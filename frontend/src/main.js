import Navigation from './componentes/Navigation.js'
import Layout from './componentes/Layout.js'
import Header from './componentes/Header.js'
import Footer from './componentes/Footer.js'
import Inicio from './pages/presentacion/inicio.js'
import LisTesistas from './pages/tesistas/LisTesistas.js'
function renderMainContent() {
  return `
    <section>
      <h2>Contenido principal</h2>
    </section> 
  `;
}


function initApp(){
  const app = document.getElementById('app');

  const routeHandler = async () => {
    const path = window.location.pathname;
    let mainContent;

    try{
      // Se manejaran todas las rutas
      switch(path){
        case '/':
          mainContent = Inicio();
          break;
        //case 'login':
        //case 'dashboard':
        case '/tesistas':
          mainContent = ListTesistas();
          break;
        default:
          mainContent = Inicio();
          break;
      }

      // Se arma la estructura básica del proyecto
      const content = `
        ${Navigation()}
        ${Header()}
        <main id="main-content">
          ${mainContent}
        </main>
        ${Footer()}
      `;

      app.innerHTML = Layout(content);
      // Agregar la posibilida de manejar directamente el HTML
      if (mainContent instanceof HTMLElement){
        const mainElement = document.querySelector('#main-content');
        mainElement.appendChild(mainContent);
      }

      app.classList.add('app-container');

    }catch(error){
      console.log('Error al buscar la ruta ingresada', error);
      app.innerHTML = Layout(`
          <div>
            <h1>Error al cargar la página</h1>
            <p>${error.message}<p>
          </div>
        `);
    }
  };

  // Manejador de navegación por clics
  document.addEventListener('click', async (e) => {
    if (e.target.matches('a[href]')){
      e.preventDefault();
      const href = e.target.getAttribute('href');
      window.history.pushState({}, '', href);
      await routeHandler();
    }
  });

  // Botones para ir hacia atras y hacia adelante
  window.addEventListener('popstate', routeHandler());

  // Cargar las rutas del proyecto
  routeHandler();

}

document.addEventListener('DOMContentLoaded', initApp());
document.title = "Sistema de Seguimiento de Tesis";

