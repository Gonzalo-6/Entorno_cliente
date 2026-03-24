const jugadores = [
  { id: 1, nombre: "Alex Ruiz", posicion: "base", puntos: 24, asistencias: 9, rebotes: 3 },
  { id: 2, nombre: "Sara Medina", posicion: "escolta", puntos: 18, asistencias: 4, rebotes: 5 },
  { id: 3, nombre: "Pablo Torres", posicion: "alero", puntos: 31, asistencias: 2, rebotes: 11 },
  { id: 4, nombre: "Lucia Vega", posicion: "ala-pivot", puntos: 14, asistencias: 1, rebotes: 9 },
  { id: 5, nombre: "Rafa Olmedo", posicion: "pivot", puntos: 22, asistencias: 0, rebotes: 14 },
  { id: 6, nombre: "Noa Blanco", posicion: "base", puntos: 9, asistencias: 12, rebotes: 2 },
  { id: 7, nombre: "Inaki Serra", posicion: "escolta", puntos: 27, asistencias: 6, rebotes: 4 }
];

const tabla = document.getElementById("tabla");
const filtro = document.getElementById("filtro-posicion");
const statsDiv = document.getElementById("stats");

// Render jugadores
function renderJugadores(lista) {
  tabla.innerHTML = "";

   if (lista.length === 0) {
    tabla.textContent = "No hay jugadores disponibles";
    return;
  }

  lista.forEach(jugador => {
    const card = document.createElement("div");
    card.className = "card";

    const nombre = document.createElement("h3");
    nombre.textContent = jugador.nombre;

    const posicion = document.createElement("p");
    posicion.textContent = "Posición: " + jugador.posicion;

    const puntos = document.createElement("p");
    puntos.textContent = "Puntos: " + jugador.puntos;

    const asistencias = document.createElement("p");
    asistencias.textContent = "Asistencias: " + jugador.asistencias;

    const rebotes = document.createElement("p");
    rebotes.textContent = "Rebotes: " + jugador.rebotes;

    card.appendChild(nombre);
    card.appendChild(posicion);
    card.appendChild(puntos);
    card.appendChild(asistencias);
    card.appendChild(rebotes);

    tabla.appendChild(card);
  });
}

// Render stats
function renderStats(lista) {
  if (lista.length === 0) {
    statsDiv.innerHTML = "Sin datos";
    return;
  }

  const totalPuntos = lista.reduce((acc, j) => acc + j.puntos, 0);
  const mediaPuntos = (totalPuntos / lista.length).toFixed(2);
  const maxJugador = lista.reduce((max, j) => j.puntos > max.puntos ? j : max);

  statsDiv.innerHTML = `
    <p><strong>Total puntos:</strong> ${totalPuntos}</p>
    <p><strong>Media puntos:</strong> ${mediaPuntos}</p>
    <p><strong>Top jugador:</strong> ${maxJugador.nombre} (${maxJugador.puntos})</p>
  `;
}

// Filtro
function filtrarJugadores() {
  let lista;

  if (filtro.value === "todas") {
    lista = jugadores;
  } else {
    lista = jugadores.filter(j => j.posicion === filtro.value);
  }

  lista.sort((a, b) => b.puntos - a.puntos);

  renderJugadores(lista);
  renderStats(lista);
}

// Evento
filtro.addEventListener("change", filtrarJugadores);

// Inicial
filtrarJugadores();