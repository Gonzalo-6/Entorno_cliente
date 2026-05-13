const API = "http://localhost:2026/tareas";

export async function getAll(){
    const res = await fetch(API);
    return await res.json();
}

export async function create(tarea) {
    const res = await fetch(API, {
        method: "POST",
        headers: {"Constent-Type": "application/json"},
        body: JSON.stringify(tarea)
    });
    return await res.json();
}

export async function update(id, cambios) {
    const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {"Constent-Type": "application/json"}, 
        body: JSON.stringify(cambios)
    });
    return await res.json();
}

export async function remove(id) {
    const res = await fetch(`${API}/${id}`, {
        method: "DELETE"
    });
    return await res.json();
}


export async function getFiltrados(filtros){
    let url = "http://localhost:2026/tareas";

    if(filtros.oedenar){
        url +="_sort=" + filtros.ordenar + "&";
    }

    const 
}