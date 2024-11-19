import { PreguntaRadio } from "./PreguntaRadio.js";
export class CuponRadio {
    constructor(minutos, preguntas) {
        this.minutos = minutos;
        this.preguntas = preguntas.map((pregunta) => {
            return new PreguntaRadio(pregunta.titular, pregunta.descripcion, pregunta.textoPregunta, pregunta.opciones);
        });
    }
    getPreguntas() {
        return [];
    }
    getTiempoValidez() {
        return this.minutos;
    }
    generarCodigo(respuestas) {
        return "";
    }
}
