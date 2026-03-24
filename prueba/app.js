/**********************
 * 1. ESTADO GLOBAL
 **********************/
let jugadores = [];
let jugadoresFiltrados = [];

/**********************
 * 2. CARGA DE DATOS
 **********************/
async function cargarDatos() {
  const res = await fetch("data/jugadores.json");
  const data = await res.json();

  // 🔥 Si quieres ranking real (recomendado)
  jugadores = agruparPorJugador(data);

  jugadoresFiltrados = jugadores;

  renderJugadores(jugadoresFiltrados);
  actualizarEstadisticas(jugadoresFiltrados);
}

/**********************
 * 3. TRANSFORMACIÓN
 **********************/
function agruparPorJugador(data) {
  const mapa = {};

  data.forEach(j => {
    if (!mapa[j.jugador]) {
      mapa[j.jugador] = {
        jugador: j.jugador,
        equipo: j.equipo,
        posicion: j.posicion,
        goles: 0,
        asistencias: 0,
        partidos: 0
      };
    }

    mapa[j.jugador].goles += j.goles;
    mapa[j.jugador].asistencias += j.asistencias;
    mapa[j.jugador].partidos += 1;
  });

  return Object.values(mapa);
}

/**********************
 * 4. RENDER UI
 **********************/
function renderJugadores(lista) {
  const contenedor = document.getElementById("tabla");
  contenedor.innerHTML = "";

  lista.forEach(j => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${j.jugador}</h3>
      <p>Equipo: ${j.equipo}</p>
      <p>⚽ Goles: ${j.goles}</p>
      <p>🎯 Asistencias: ${j.asistencias}</p>
      <p>📊 Partidos: ${j.partidos}</p>
    `;

    contenedor.appendChild(card);
  });
}

/**********************
 * 5. FILTROS
 **********************/
function aplicarFiltros() {
  const posicion = document.getElementById("filtro-posicion").value;
  const texto = document.getElementById("busqueda").value.toLowerCase();

  let resultado = jugadores;

  if (posicion !== "todas") {
    resultado = resultado.filter(j => j.posicion === posicion);
  }

  if (texto) {
    resultado = resultado.filter(j =>
      j.jugador.toLowerCase().includes(texto)
    );
  }

  jugadoresFiltrados = resultado;

  renderJugadores(resultado);
  actualizarEstadisticas(resultado);
}

/**********************
 * 6. ESTADÍSTICAS
 **********************/
function actualizarEstadisticas(lista) {
  const totalGoles = lista.reduce((acc, j) => acc + j.goles, 0);
  const media = lista.length ? (totalGoles / lista.length).toFixed(2) : 0;

  const top = lista.reduce((max, j) =>
    j.goles > (max?.goles || 0) ? j : max
  , null);

  document.getElementById("total-goles").textContent = totalGoles;
  document.getElementById("media-goles").textContent = media;
  document.getElementById("top-jugador").textContent = top ? top.jugador : "-";
}

/**********************
 * 7. EVENTOS
 **********************/
function initEventos() {
  document.getElementById("filtro-posicion")
    .addEventListener("change", aplicarFiltros);

  document.getElementById("busqueda")
    .addEventListener("input", aplicarFiltros);
}

/**********************
 * 8. INIT
 **********************/
document.addEventListener("DOMContentLoaded", () => {
  initEventos();
  cargarDatos();
});

/**********************
 * 9. Carga de datos alternativa (si no quieres usar fetch)
 * **********************/
async function cargarDatos() {
  try {
    const res = await fetch("data/jugadores.json");

    if (!res.ok) throw new Error("Error al cargar JSON");

    const data = await res.json();

    jugadores = agruparPorJugador(data);
    jugadoresFiltrados = jugadores;

    renderJugadores(jugadoresFiltrados);
    actualizarEstadisticas(jugadoresFiltrados);

  } catch (error) {
    console.error("Error:", error);
  }
}