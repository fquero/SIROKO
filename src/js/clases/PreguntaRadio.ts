import { IPregunta } from "../interfaces/IPregunta.js";
import { Opcion } from "../types/CuponRadioTypes.js";

export class PreguntaRadio implements IPregunta {
  private titular: string;
  private descripcion: string | null;
  private textoPregunta: string;
  private opciones: Array<Opcion>;

  constructor(
    titular: string,
    descripcion: string | null,
    textoPregunta: string,
    opciones: Array<Opcion>
  ) {
    this.titular = titular;
    this.descripcion = descripcion;
    this.textoPregunta = textoPregunta;
    this.opciones = opciones;
  }

  getTitular(): string {
    return this.titular;
  }

  getDescrip(): string | null {
    return this.descripcion;
  }

  getTextoPregunta(): string {
    return this.textoPregunta;
  }

  renderizarInput(): HTMLElement {
    return document.createElement("input");
  }
}
