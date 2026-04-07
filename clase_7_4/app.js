const productos = [
    { id: 1, nombre: "teclado", precio: 20 },
    { id: 2, nombre: "monitor", precio: 200 },
    { id: 3, nombre: "raton", precio: 50 },
];
let indice = 0;

function crearTarjeta (producto) {
    const tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "tarjeta");

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;
    const precio = document.createElement("p");
    precio.textContent = producto.precio;

    const boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    boton.setAttribute("class", "boton");
    boton.addEventListener("click", () => {
        boton.classList.toggle("activo");
        if (boton.classList.contains("activo")) {
            boton.textContent = "En el carrito";
        } else {
            boton.textContent = "Agregar al carrito";   
        }
    });
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);
    return tarjeta;

}
document.querySelector("#btnAgregar").addEventListener("click", () => {
    if (indice >= productos.length) return ;
    const tarjeta_unica = crearTarjeta(productos[indice]);
    document.querySelector("#catalogo").appendChild(tarjeta_unica);
    indice++;
});

document.querySelector("#btnEliminar").addEventListener("click", () => {
    if (indice <= 0) return ;
    document.querySelector("#catalogo").removeChild(document.querySelector("#catalogo").lastChild);
 
});
