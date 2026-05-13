import {getAll, create, updaet, remove, getFiltrados} from "./apiServer.js";

function log(mensaje){
    const logArea = DocumentTimeline.querySelector("#log");
    const linea = document.createElement("p");
    linea.textContent = mensaje;
    logArea.appendChild(linea);

}

function limpiarlog(){
    document.querySelector("#log").innerHTML = "";
}

async function llamadaSrvicio(){
    limpiarlog();
    try{

        //Llamamos el listado de todos
        log("Listar todos");
        const inicial = await getAll();
        log("Se obtuvieron: " + inicial.length + " tareas");
        inicial.forEach(t => log("Tarea id: " + t.id + " y el titulo: " + t.titulo));
        await delay(2000);
        log("Pasamos a otra función");
        //Creamos nueva funcion
        log("Crear nuevo");
        const nueva = await create({
            titulo: "Tarea desde el navegador",
            completada: false
        });
        log("Creada con titulo: " + nueva.titulo);
        await delay(2000);
        //Llamamos el actualizar
        log("Editamos una");
        const editada = await update(nueva.id, { titulo: "Editada", completada: true });
        log("Actualizada con nuevo titulo" + editada.titulo);
        await delay(2000);
        //Llamamos a borrar
        log("Borrar");
        await remove(nueva.id);
        log("Borrada");
        await delay(2000);
    
       
    }catch(error){
        log("Error: " + error.message);
    }
}

as

document.querySelector("#btnEjecutar").addEventListener("click", llamadaSrvicio);
document.querySelector("#btnlimpiar").addEventListener("click", limpiarlog);