async function cargarBiblioteca(){
    const res = await fetch("biblioteca.xml");
    const texto = await res.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(texto, "application/xml");

    // Mostrar en consola 
    const nodos=xml.getElementsByTagName("libro");
    console.log(nodos);
    console.log(nodos.length);


    //Creo hijos DOM para añadir
    const libros=Array.from(nodos);
    let html = "";
    for (let i=0; i < libros.length; i++){
        const libro = libros[i];
        const titulo = libro.querySelector("titulo").textContent;
        const autor = libro.querySelector("autor").textContent;
        const año = libro.querySelector("anio").textContent;
        console.log(titulo);
        console.log(autor);
        console.log(año);
        console.log("genero");
        html += '<div class="card"><h3>' + titulo + '</h3><p>Autor: ' + autor + '</p><p>Año: ' + año + '</p></div>';    

    }

    document.getElementById("lista").innerHTML = html;
}

async function cargarBiblioteca2(){
    const res = await fetch("biblioteca.xml");
    const texto = await res.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(texto, "application/xml");

    //cambiar de xml a json
    function xmlToArray(xmlDoc){
        return Array.from(xmlDoc.getElementsByTagName("libro")).map(libro => ({
            id: libro.getAttribute("id"),
            genero: libro.getAttribute("genero"),
            disponible: libro.getAttribute("disponible") === "true",
            titulo: libro.querySelector("titulo").textContent,
            autor: libro.querySelector("autor").textContent,
            año: libro.querySelector("anio").textContent
        }));    
    }


    const libros = xmlToArray(xml);
    console.log(libros);
    let html = "";
    for (let i=0; i < libros.length; i++){
        const libro = libros[i];
        let clase;
        if(libro.disponible
        html += '<div class="card"><h3>' + libro.titulo + '</h3><p>Autor: ' + libro.autor + '</p><p>Año: ' + libro.año + '</p></div>';    

        let clase;
    }

}
cargarBiblioteca();
cargarBiblioteca2();