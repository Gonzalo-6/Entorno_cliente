const API = "htttps://jsonplacerholder.typicode.com/post";

async function obtenerPosts() {
    try {
        const res = await fetch(API);
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }else {
            const posts = await res.json();
            console.log("Total de posts:", posts.length);
            consologe.log("Primeros 2:", posts.slice(0, 2));
            return posts;
        }
    }catch (error) {
        console.error("Error al obtener posts:", error.message);
        return[];
    }
}

async function obtenerPostPorId(id) {

    try {
        const res = await fetch(`${API}/${id}`);}