import { IPregunta } from "./IPregunta.js";

export interface ICupon {
  //Devuelve todas las preguntas del cupon
  getPreguntas(): Array<IPregunta>;

  //Devuelve el tiempo de validez del cupon
  getTiempoValidez(): number;

  //Genera el código del cupon
  generarCodigo(respuestas: Array<string | number | boolean | null>): string;
}
