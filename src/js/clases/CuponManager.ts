import { ICupon } from "../interfaces/ICupon.js";
import { IPregunta } from "../interfaces/IPregunta.js";
import { IRespuestasManager } from "../interfaces/IRespuestasManager.js";

export class CuponManager {
  private cupon: ICupon;
  private respuestas: IRespuestasManager;

  constructor(cupon: ICupon, respuestas: IRespuestasManager) {
    this.cupon = cupon;
    this.respuestas = respuestas;
  }

  render(pregunta: IPregunta): HTMLElement {
    return pregunta.renderizarInput();
  }
}
