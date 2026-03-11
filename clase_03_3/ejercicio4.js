// Requisitos:
//   1. Crea un array vacio para las tareas.
//   2. Cada tarea: { id, titulo, estado: 'pendiente' }
//   3. Funcion agregarTarea(titulo):
//      - Crea el objeto y lo anade con push().
//   4. Funcion completarTarea(id):
//      - Usa .find() para buscar la tarea.
//      - Cambia su estado a 'completada'.
//   5. Funcion eliminarTarea(id):
//      - Usa .filter() para eliminarla del array.
//   6. Funcion listarPorEstado(estado):
//      - Filtra y muestra las tareas de ese estado.
//   7. Funcion resumen():
//      - Muestra cuantas pendientes y completadas hay.
//
// ************************************************************

let tareas = [];
let nextId = 1;

function agregarTarea(titulo) {
    let tarea = {
        id: nextId++,
        titulo: titulo,
        estado: 'pendiente'
    };
    tareas.push(tarea);
}

function completarTarea(id) {
    let tarea = tareas.find(t => t.id === id);
    if(tarea) {
        tarea.estado = "completada";
        }else {
        console.log("Tarea no encontrada");
    }
}
  


function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
 
}

function listarPorEstado(estado) {

    let filtrarEstado = tareas.filter(t => t.estado === estado);
    console.log("Tareas " + estado + ": " + filtrarEstado.map(t => t.titulo).join(", "));

}

function resumen() {
    let pendientes = tareas.filter(t => t.estado === "pendiente").length;
    let completadas = tareas.filter(t => t.estado === "completada").length;
    console.log("Resumen: " + pendientes + " pendientes, " + completadas + " completadas");
    
  
}


agregarTarea("Comprar leche");
agregarTarea("Lavar el auto");
agregarTarea("Hacer ejercicio");

completarTarea(2);

listarPorEstado("pendiente");
listarPorEstado("completada");

resumen();

