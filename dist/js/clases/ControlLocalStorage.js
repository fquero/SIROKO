export class ControlLocalStorage {
    constructor(cantidad) {
        this.respuestas = {};
    }
    //Consulta si las variables de respuestas están definidas en local storage
    isControlIniciado() {
        return true;
    }
    crearSetDeRespuestas(cantidad) {
        return true;
    }
    getRespuestas() {
        return this.respuestas;
    }
    procesarRespuesta(nombre, valor) {
        return true;
    }
}
