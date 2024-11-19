export class PreguntaRadio {
    constructor(titular, descripcion, textoPregunta, opciones) {
        this.titular = titular;
        this.descripcion = descripcion;
        this.textoPregunta = textoPregunta;
        this.opciones = opciones;
    }
    getTitular() {
        return this.titular;
    }
    getDescrip() {
        return this.descripcion;
    }
    getTextoPregunta() {
        return this.textoPregunta;
    }
    renderizarInput() {
        const div = document.createElement("div");
        div.textContent = "Renderizando pregunta...";
        return div;
    }
}
