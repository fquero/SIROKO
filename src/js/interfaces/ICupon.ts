import { Respuesta } from "../types/RespuestaType.js";
import { IPregunta } from "./IPregunta.js";

export interface ICupon {
  //Devuelve todas las preguntas del cupon
  getPreguntas(): Array<IPregunta>;

  //Devuelve el tiempo de validez del cupon
  getTiempoValidez(): number;

  //Genera el código del cupon
  generarCodigo(respuestas: Array<Respuesta>): string;

  //Persiste el código
  persistirCodigo(codigo: string, fecha: Date): boolean;

  //Devuelve el código generado
  getCodigo(): string;
}
