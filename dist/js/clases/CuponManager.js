export class CuponManager {
    constructor(cupon, respuestas) {
        this.cupon = cupon;
        this.respuestas = respuestas;
    }
    /*
      Evalúa las respuestas y según corresponda renderiza pregunta o código de cupón
    */
    render() {
        //1. Si existe pregunta sin respuesta se renderiza
        for (const [idpregunta, pregunta] of this.cupon.getPreguntas().entries()) {
            //Si la pregunta no tiene respuesta, la renderizo
            return this._renderizarPregunta(pregunta);
        }
        // 2. Si no existe pregunta sin respuesta se genera el código de cupón
        return document.createElement("div");
    }
    _renderizarPregunta(pregunta) {
        var _a;
        //Función auxiliar
        const crearElementoHTML = (etiqueta, clase, contenido = "") => {
            const elemento = document.createElement(etiqueta);
            elemento.classList.add(clase);
            elemento.textContent = contenido;
            return elemento;
        };
        //Control type descrip de pregunta
        const descripcion = (_a = pregunta.getDescrip()) !== null && _a !== void 0 ? _a : "";
        const cabecera = crearElementoHTML("section", "encabezado");
        cabecera.append(crearElementoHTML("span", "encabezado__indicador", "Paso 1 de 2"), crearElementoHTML("h1", "encabezado__titulo", pregunta.getTitular()), crearElementoHTML("p", "encabezado__contenido", descripcion), pregunta.renderizarInput());
        return cabecera;
    }
}
