import { IRespuestasManager } from "../interfaces/IRespuestasManager.js";

export class ControlLocalStorage implements IRespuestasManager {
  private respuestas: Record<string, string | number | boolean | null>;

  constructor(cantidad: number) {
    this.respuestas = {};
  }

  //Consulta si las variables de respuestas están definidas en local storage
  isControlIniciado(): boolean {
    return true;
  }

  crearSetDeRespuestas(cantidad: number): boolean {
    return true;
  }

  getRespuestas(): Record<string, string | number | boolean | null> {
    return this.respuestas;
  }

  procesarRespuesta(
    nombre: string,
    valor: string | number | boolean | null
  ): boolean {
    return true;
  }
}
