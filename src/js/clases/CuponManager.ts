import { ICupon } from "../interfaces/ICupon.js";
import { IPregunta } from "../interfaces/IPregunta.js";
import { IRespuestasManager } from "../interfaces/IRespuestasManager.js";
import { crearElementoHTML } from "../utils/crearElementoHTML.js";

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
      if (!localStorage.getItem(`SirokoP${idpregunta}`)) {
        return this._renderizarPregunta(idpregunta, pregunta);
      }
    }
    // 2. Si no existe pregunta sin respuesta se genera el código de cupón
    return this._renderizarCupon(
      this.cupon.generarCodigo(this.respuestas.getRespuestas())
    );
  }

  /*
    Renderiza una pregunta recibida como parámetro
  */
  private _renderizarPregunta(
    idpregunta: number,
    pregunta: IPregunta
  ): HTMLElement {
    //Cálculo de preguntas pendientes en base a respuestas
    const respuestasRecibidas = this.respuestas
      .getRespuestas()
      .filter((respuesta) => respuesta.respuesta);
    const indicador = `Paso ${respuestasRecibidas.length + 1} de ${
      this.cupon.getPreguntas().length
    }`;

    //Control type descrip de pregunta
    const descripcion: string | undefined = pregunta.getDescrip() ?? "";

    const preguntaHTML = crearElementoHTML("div", "", "", "subcontenedor");

    //Cabecera
    const cabecera = crearElementoHTML("section", "encabezado");
    cabecera.innerHTML = `
      <span class="encabezado__indicador">${indicador}</span>
      <h1 class="encabezado__titulo">${pregunta.getTitular()}</h1>
      <p class="encabezado__contenido">${descripcion}</p>
      `;

    //Contenido
    const contenido = crearElementoHTML("section", "contenido");
    contenido.innerHTML = `
      <h2 class="contenido__subtitulo">${pregunta.getTextoPregunta()}</h2>
    `;

    //Botón de envio
    const btnEnviar = crearElementoHTML(
      "a",
      "btn",
      "Siguiente ",
      `btnSend`,
      '<i class="material-icons">arrow_right_alt</i>'
    );

    //Pregunta
    const formulario = pregunta.renderizarInput(idpregunta);
    formulario.append(btnEnviar);

    contenido.append(formulario);
    preguntaHTML.append(cabecera, contenido);

    return preguntaHTML;
  }

  //renderiza el cupón
  private _renderizarCupon(codigo: string): HTMLElement {
    //const cuponHTML = crearElementoHTML("div", "", "", "subcontenedor");
    const cuponHTML = crearElementoHTML("div");

    // Cabecera
    const cabecera = crearElementoHTML("section", "encabezado");
    cabecera.innerHTML = `
      <span class="encabezado__indicador">Tu premio está listo</span>
      <h1 class="encabezado__titulo">¡Enhorabuena!</h1>
    `;

    // Contenido
    const contenido = crearElementoHTML("section", "contenido");
    contenido.innerHTML = `
      <h2 class="contenido__subtitulo">Lo prometido es deuda</h2>
      <div class="cupon">
        <div class="codigo">
          <div class="codigo__texto">${codigo}</div>
          <a href="#" class="codigo__boton">Copiar</a>
        </div>
        <p class="cupon__descrip">
          Introduce este código en tu próxima compra para conseguir tu premio.
          ¡Disponible durante 20 minutos!
        </p>
        <div class="crono">
          <div class="crono__cuentaatras">
            <i class="material-icons">access_alarm</i> <span class="crono__reloj"></span>
          </div>
          <div class="crono__caducado">
            <i class="material-icons">access_alarm</i> Código caducado.
            <a href="#" class="crono__caducado__reiniciar">Reiniciar</a>
          </div>
        </div>
        <a href="https://siroko.com" id="btnSend" class="btn">
          Ir a siroko.com <i class="material-icons">arrow_right_alt</i>
        </a>
      </div>
    `;

    cuponHTML.append(cabecera, contenido);

    return cuponHTML;
  }

  anularCupon(): void {}
}
