// Gestiona las notas de un estudiante y calcula estadisticas.
//
// Requisitos:
//   1. Crea un array con al menos 8 notas (0-10).
//   2. Calcula la media aritmetica usando .reduce().
//   3. Obten la nota maxima con Math.max(...array).
//   4. Obten la nota minima con Math.min(...array).
//   5. Cuenta cuantas notas son >= 5 usando .filter().
//   6. Clasifica el rendimiento segun la media:
//      Suspenso (<5), Aprobado (5-6.99),
//      Notable (7-8.99), Sobresaliente (9-10).
//   7. Muestra un resumen completo por consola.

const notas = [7, 8, 5, 4, 9, 6, 3, 10];

let sumaNotas = notas.reduce((acc, nota) => acc + nota, 0);

let media = sumaNotas / notas.length;

let notaMaxima = Math.max(...notas);
let notaMinima = Math.min(...notas);
let aprovados  = notas.filter(notas => notas >= 5).length;

let clasificacion = "";
if (media < 5) {
    clasificacion = "Suspenso";
} else if (media < 7) {
    clasificacion = "Aprobado";
} else if (media < 9) {
    clasificacion = "Notable";
} else {
    clasificacion = "Sobresaliente";
}   

console.log("Notas: " + notas);
console.log("Media: " + media.toFixed(2));
console.log("Nota Maxima: " + notaMaxima);  
console.log("Nota Minima: " + notaMinima);
console.log("Cantidad de Aprobados: " + aprovados);
console.log("Clasificacion: " + clasificacion);

