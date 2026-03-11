// **
// EJERCICIO 5 - Arrow Functions y Callbacks
// Tema: Funciones (declaracion, arrow, callbacks)
// **
//
// Practica diferentes formas de declarar funciones y el
// concepto de callbacks.
//
// Requisitos:
//   1. Crea una funcion clasica "sumar(a, b)" que retorne
//      la suma.
//   2. Crea la misma como arrow function:
//      const sumarArrow = (a, b) => a + b;
//   3. Crea una funcion "operar(a, b, callback)" que reciba
//      dos numeros y una funcion, y devuelva el resultado
//      de ejecutar callback(a, b).
//   4. Crea arrow functions para: restar, multiplicar, dividir.
//   5. Usa operar() con cada una de las operaciones.
//   6. Crea "aplicarATodas(a, b, operaciones)" donde
//      operaciones es un array de funciones.
//      Recorre el array y muestra el resultado de cada una.
//   7. Muestra todos los resultados por consola.
//
// Pista: Una funcion es un valor mas en JS. Puedes pasarla
//        como argumento, guardarla en un array, etc.
// **


//1. Funcion clasica sumar
function sumar (a, b) {
    return a +b;
}

//2. Arrow function sumar
const sumarArrow = (a,b) => a + b;

//2. funcion operar
function operar(a,b, callback) {
    return callback(a,b);
}

//4. Arrow functions para restar, multiplicar, dividir
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => a/b;

//5. Usar operar con cada una de las operaciones
console.log("La suma es: " + operar(10,5,sumar));
console.log("La resta: " +operar(10,5, restar));
console.log("La multiplicación es: " +operar(10,5, multiplicar));
console.log("la división es: " +operar(10,5, dividir));

//6. Crear aplicarATodas

function aplicarTodas(a,b, operaciones) {
    operaciones.forEach(op=> {
        console.log("Resultado: " + op(a,b));
    }); 
}

//7. Mostrar resultados por consola
const operaciones = [sumar, restar, multiplicar, dividir];
aplicarTodas(10,5, operaciones);
