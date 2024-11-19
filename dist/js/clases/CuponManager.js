export class CuponManager {
    constructor(cupon, respuestas) {
        this.cupon = cupon;
        this.respuestas = respuestas;
    }
    render(pregunta) {
        return pregunta.renderizarInput();
    }
}
