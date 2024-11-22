import { crearElementoHTML } from "../utils/crearElementoHTML.js";
export class PreguntaRadio {
    titular;
    descripcion;
    textoPregunta;
    opciones;
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
    renderizarInput(idpregunta) {
        const form = crearElementoHTML("form", "formulario");
        for (const [key, opcion] of Object.entries(this.opciones)) {
            const op = crearElementoHTML("div", "opcion");
            const checked = key == "0" ? "checked" : ""; //Requisito: el primer valor es el que se selecciona por defecto
            op.innerHTML = `
        <input type="radio" class="opcion__radio-input" id="op${key}" data-pregunta="SirokoP${idpregunta}" name="PreguntaSiroko" value="${opcion.valor}" ${checked} />
        <label for="op${key}" class="opcion__radio-label">
          <span class="opcion__radio-button"></span>
          ${opcion.texto}
        </label>`;
            form.append(op);
        }
        return form;
    }
}
//# sourceMappingURL=PreguntaRadio.js.map