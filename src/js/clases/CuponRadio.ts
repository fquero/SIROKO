import { ICupon } from "../interfaces/ICupon.js";
import { PreguntaRadio } from "./PreguntaRadio.js";
import { Opcion } from "../types/CuponRadioTypes.js";

export class CuponRadio implements ICupon {
  private minutos: number;
  private preguntas: Array<PreguntaRadio>;

  constructor(
    minutos: number,
    preguntas: Array<{
      titular: string;
      descripcion: string | null;
      textoPregunta: string;
      opciones: Array<Opcion>;
    }>
  ) {
    this.minutos = minutos;
    this.preguntas = preguntas.map((pregunta) => {
      return new PreguntaRadio(
        pregunta.titular,
        pregunta.descripcion,
        pregunta.textoPregunta,
        pregunta.opciones
      );
    });
  }

  getPreguntas(): Array<PreguntaRadio> {
    return this.preguntas;
  }

  getTiempoValidez(): number {
    return this.minutos;
  }

  generarCodigo(respuestas: Array<string | number | boolean | null>): string {
    return "";
  }
}
