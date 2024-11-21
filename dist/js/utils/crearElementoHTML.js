//Crea elementos HTML recibiendo etiqueta, clase , contenido e id (opcional)
export function crearElementoHTML(etiqueta, clase = "", contenido = "", id = "", innerHTML = "") {
    const elemento = document.createElement(etiqueta);
    clase && elemento.classList.add(clase);
    elemento.textContent = contenido;
    id ? (elemento.id = id) : null;
    innerHTML ? (elemento.innerHTML = contenido + innerHTML) : null;
    return elemento;
}
