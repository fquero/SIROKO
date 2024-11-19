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

  /*
    Evalúa las respuestas y según corresponda renderiza pregunta o código de cupón
  */
  render(): HTMLElement {
    //1. Si existe pregunta sin respuesta se renderiza
    for (const [idpregunta, pregunta] of this.cupon.getPreguntas().entries()) {
      //Si la pregunta no tiene respuesta, la renderizo
      return this._renderizarPregunta(pregunta);
    }

    // 2. Si no existe pregunta sin respuesta se genera el código de cupón
    return document.createElement("div");
  }

  private _renderizarPregunta(pregunta: IPregunta): HTMLElement {
    //Función auxiliar
    const crearElementoHTML = (
      etiqueta: string,
      clase: string,
      contenido: string = ""
    ) => {
      const elemento = document.createElement(etiqueta);
      elemento.classList.add(clase);
      elemento.textContent = contenido;
      return elemento;
    };

    //Control type descrip de pregunta
    const descripcion: string | undefined = pregunta.getDescrip() ?? "";

    const cabecera = crearElementoHTML("section", "encabezado");
    cabecera.append(
      crearElementoHTML("span", "encabezado__indicador", "Paso 1 de 2"),
      crearElementoHTML("h1", "encabezado__titulo", pregunta.getTitular()),
      crearElementoHTML("p", "encabezado__contenido", descripcion),
      pregunta.renderizarInput()
    );

    return cabecera;
  }
}
