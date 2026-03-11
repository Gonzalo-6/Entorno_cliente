
// **
// EJERCICIO 6 - Contador Interactivo
// Tema: Eventos y DOM
// **
//
// Crea una pagina HTML con un contador que el usuario pueda
// incrementar, decrementar y resetear.
//
// Requisitos:
//   1. Crea un archivo .html con este HTML base:
//
//      <div id="contador-app">
//        <h1 id="numero">0</h1>
//        <button id="btn-dec">-</button>
//        <button id="btn-reset">Reset</button>
//        <button id="btn-inc">+</button>
//      </div>
//
//   2. Selecciona los elementos con getElementById().
//   3. Anade addEventListener('click', ...) a cada boton.
//   4. El contador NO debe bajar de 0.
//   5. Si el valor es 0 -> color rojo. Si > 0 -> color verde.
//   6. Usa textContent para actualizar el numero.
//   7. Usa classList.add / classList.remove para los colores.
//
// Pista: Guarda el valor en una variable JS. Cada clic
//        actualiza la variable Y el DOM.
// **

// Escribe tu JavaScript aqui (para incluirlo en <script>):
//let contador = 0;
// **

// crear una variable contador, 4 elementos, e1 getElementById, addEventeListener(´click`)

// variable contador
let contador = 0;

// seleccionar elementos
const numero = document.getElementById("numero");
const btnDec = document.getElementById("btn-dec");
const btnReset = document.getElementById("btn-reset");
const btnInc = document.getElementById("btn-inc");

// función para actualizar número y color
function actualizar() {
    numero.textContent = contador;

    if (contador === 0) {
        numero.classList.remove("verde");
        numero.classList.add("rojo");
    } else {
        numero.classList.remove("rojo");
        numero.classList.add("verde");
    }
}

// botón incrementar
btnInc.addEventListener("click", function () {
    contador++;
    actualizar();
});

// botón decrementar
btnDec.addEventListener("click", function () {
    if (contador > 0) {
        contador--;
    }
    actualizar();
});

// botón reset
btnReset.addEventListener("click", function () {
    contador = 0;
    actualizar();
});

// ejecutar al iniciar
actualizar();


