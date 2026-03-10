// Requisitos:
//   1. Declara una constante con un valor en Celsius (ej: 25).
//   2. Calcula Fahrenheit con: F = (C * 9/5) + 32
//   3. Muestra por consola: "25C equivale a 77F"
//   4. Haz la conversion inversa: de Fahrenheit a Celsius.
//      Formula: C = (F - 32) * 5/9
//
//        const = valores fijos, let = valores que cambian.
// ************************************************************

const tempCelsius = 25;

let tempFahrenheit = (tempCelsius * 9/5) + 32;

console.log(tempCelsius + "C equivale a " + tempFahrenheit + "F");

let tempCelsiusInversa = (tempFahrenheit - 32) * 5/9;

console.log(tempFahrenheit + "F equivale a " + tempCelsiusInversa + "C");

