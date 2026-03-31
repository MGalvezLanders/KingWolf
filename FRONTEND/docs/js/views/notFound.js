export function renderNotFound() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <section class="error">
      <h1>404 - Página no encontrada</h1>
        <p>La ruta "${window.location.pathname}" no existe.</p>
    </section>
    <p><a href="/">Volver al inicio</a></p>
  `;
}