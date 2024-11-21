//Crea elementos HTML recibiendo etiqueta, clase , contenido e id (opcional)
export function crearElementoHTML(
  etiqueta: string,
  clase: string = "",
  contenido: string = "",
  id: string = "",
  innerHTML: string = ""
): HTMLElement {
  const elemento: HTMLElement = document.createElement(etiqueta);
  clase && elemento.classList.add(clase);
  elemento.textContent = contenido;
  id ? (elemento.id = id) : null;
  innerHTML ? (elemento.innerHTML = contenido + innerHTML) : null;
  return elemento;
}
