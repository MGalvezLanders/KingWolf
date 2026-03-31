// Importar renders
import { renderHome } from './views/home.js';
import { renderProduct } from './views/product.js';
import { renderContact } from './views/contact.js';
import { renderNotFound } from './views/notFound.js';

// Tabla de rutas
const routes = {
  '/': renderHome,
  '/product': renderProduct,
  '/contact': renderContact,
};

// Router: lee pathname y renderiza
export function router() {
  let path = window.location.pathname;
  
  // Si termina con index.html, usamos /
  if (path.endsWith('index.html')) {
    path = '/';
  }
  
  // Limpieza adicional: quitar trailing slash (excepto en /)
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  
  console.log('🔄 Router navegando a:', path);
  const render = routes[path] || renderNotFound;
  render();
}

export function navigateTo(path) {
  console.log('📍 Navegando a:', path);
  history.pushState(null, '', path);
  router(); // CRÍTICO: pushState NO dispara popstate
}