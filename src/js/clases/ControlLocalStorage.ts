import { IRespuestasManager } from "../interfaces/IRespuestasManager.js";
import { Respuesta } from "../types/RespuestaType.js";

export class ControlLocalStorage implements IRespuestasManager {
  private respuestas: Array<Respuesta>;

  constructor(cantidad: number) {
    try {
      this.respuestas = [];
      if (this.isControlIniciado()) {
        this.respuestas = this.crearSetDeRespuestas(cantidad);
      } else {
        this.respuestas = this.recuperarSetDeRespuestas(cantidad);
      }
    } catch (error) {
      console.log(error);
      this.respuestas = [];
    }
  }

  //Consulta si las variables de respuestas están definidas en local storage
  isControlIniciado(): boolean {
    return true;
  }

  //Crea variables localStorage para almacenar respuestas de cada pregunta
  crearSetDeRespuestas(cantidad: number): Array<Respuesta> {
    try {
      for (let i = 0; i < cantidad; i++) {
        localStorage.setItem(`SirokoP${i}`, "");
        this.respuestas.push({ idpregunta: `SirokoP${i}`, respuesta: "" });
      }
      return this.respuestas;
    } catch (error) {
      console.log(error);
      this.respuestas = [];
      return this.respuestas;
    }
  }

  recuperarSetDeRespuestas(cantidad: number): Array<Respuesta> {
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
    } catch (error) {
      console.log(error);
      this.respuestas = [];
      return this.respuestas;
    }
  }

  getRespuestas(): Array<Respuesta> {
    return this.respuestas;
  }

  procesarRespuesta(
    nombre: string,
    valor: string | number | boolean | null
  ): boolean {
    return true;
  }
}
