export class ControlLocalStorage {
    respuestas;
    constructor(cantidad) {
        try {
            this.respuestas = [];
            this.respuestas = !this.isControlIniciado()
                ? this.crearSetDeRespuestas(cantidad)
                : this.recuperarSetDeRespuestas(cantidad);
        }
        catch (error) {
            console.log(error);
            this.respuestas = [];
        }
    }
    //Consulta si las variables de respuestas están definidas en local storage
    isControlIniciado() {
        return localStorage.getItem("SirokoP0") !== null;
    }
    //Crea variables localStorage para almacenar respuestas de cada pregunta
    crearSetDeRespuestas(cantidad) {
        try {
            for (let i = 0; i < cantidad; i++) {
                localStorage.setItem(`SirokoP${i}`, "");
                this.respuestas.push({ idpregunta: `SirokoP${i}`, respuesta: "" });
            }
            return this.respuestas;
        }
        catch (error) {
            console.log(error);
            this.respuestas = [];
            return this.respuestas;
        }
    }
    recuperarSetDeRespuestas(cantidad) {
        try {
            //Sólo recupero respuestas SirokoP{i}
            this.respuestas = Object.keys(localStorage)
                .filter((key) => key.startsWith("SirokoP"))
                .map((key) => ({
                idpregunta: key,
                respuesta: localStorage.getItem(key),
            }));
            //Verificación control de cantidad
            if (this.respuestas.length !== cantidad) {
                throw new Error("Error en recuperación de respuestas");
            }
            return this.respuestas;
        }
        catch (error) {
            console.log(error);
            this.respuestas = [];
            return this.respuestas;
        }
    }
    getRespuestas() {
        return this.respuestas;
    }
    procesarRespuesta(nombre, valor) {
        try {
            const respuestaEncontrada = this.respuestas.find((respuesta) => respuesta.idpregunta === nombre);
            if (respuestaEncontrada) {
                respuestaEncontrada.respuesta = valor;
                localStorage.setItem(nombre, valor);
            }
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    limpiar() {
        this.respuestas.forEach((respuesta) => {
            localStorage.removeItem(respuesta.idpregunta);
        });
        return true;
    }
}
