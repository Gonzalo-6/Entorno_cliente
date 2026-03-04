// Clasifica a una persona segun su edad.
//
// Requisitos:
//   1. Declara una variable con la edad.
//   2. Usa if / else if / else para clasificar:
//      - Bebe:        0 - 2
//      - Nino:        3 - 12
//      - Adolescente: 13 - 17
//      - Adulto:      18 - 64
//      - Senior:      65+
//   3. Si la edad es negativa o > 120, muestra error.
//   4. Muestra la clasificacion por consola.

const edad = 25;
let clasificacion ="";



if (edad < 0 || edad > 120) {
    clasificacion("Error");
} else if (edad <= 2) {
    console.log("Bebe");
} else if (edad <= 12) {
    console.log("Nino");
} else if (edad <= 17) {
    console.log("Adolescente");
} else if (edad <= 64) {
    console.log("Adulto");
} else {
    console.log("Senior");
}