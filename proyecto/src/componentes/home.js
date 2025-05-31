export default async function mostrarHome() {
  const app = document.getElementById("app");
  app.innerHTML = `<h2>Personajes de Harry Potter</h2><div id="lista" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; padding:10px;"></div>`;

  const lista = document.getElementById("lista");

  try {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await res.json();

    data.forEach((personaje, index) => {
      const item = document.createElement("div");

      item.innerHTML = `
        <p>${index + 1} - ${personaje.name}</p>
        <img src="${personaje.image || 'https://via.placeholder.com/100?text=Sin+Imagen'}" style="width: 100px; height:100px; object-fit: cover;" />
      `;

      lista.appendChild(item);
    });
  } catch (error) {
    app.innerHTML = `<p>Error al cargar los personajes: ${error.message}</p>`;
  }
}
