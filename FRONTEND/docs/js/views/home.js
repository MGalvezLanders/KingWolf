
export function renderHome() {
  const app = document.querySelector('#app');
  app.innerHTML = `
  <main class="main">
    <h1>Home</h1>
    <h2 class="title-main">Bienvenido a King Wolf</h2>
    <p class="text-main">Un local de ventas mayorista y minorista de medias</p>
  </main>
  `;
}