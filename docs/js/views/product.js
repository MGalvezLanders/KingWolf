export function renderProduct() {
  const app = document.querySelector('#app');
  app.innerHTML = `
  <main class="main">  
    <h1>Productos</h1>
      <div class="card">
      <img class="card__avatar" src="${window.location.origin}/docs/img/logo.jpg" alt="Avatar del usuario">
      <h2 class="card__name">King Wolf</h2>
      <p class="card__role">Local de ventas mayorista y minorista de medias</p>
      <p class="card__bio">
        Hacemos que tus pies se sientan como en casa. Medias de calidad para cada paso que das. ¡Visítanos y descubre tu par perfecto!
      </p>
      <div class="card__stats">
        <div class="stat">
          <span class="stat__value">18</span>
          <span class="stat__label">Publicaciones</span>
        </div>
        <div class="stat">
          <span class="stat__value">185</span>
          <span class="stat__label">Seguidores</span>
        </div>
        <div class="stat">
          <span class="stat__value">375</span>
          <span class="stat__label">Siguiendo</span>
        </div>
      </div>
      <div class="card__actions">
        <button class="btn btn--primary">Seguir</button>
        <button class="btn btn--secondary">Mensaje</button>
      </div>
    </div>
  </main>  
  `;
}