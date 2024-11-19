import { ControlLocalStorage } from "./js/clases/ControlLocalStorage.js";
import { CuponManager } from "./js/clases/CuponManager.js";
import { CuponRadio } from "./js/clases/CuponRadio.js";

//Datos estáticos. Se podrían extraer de BD, API, etc.
import { preguntas } from "./preguntas.js";

const minutos = 20;
//Instancio el tipo de cupón radio
const cupon = new CuponRadio(minutos, preguntas);
//Controlo respuestas mediante local storage
//se puede extender a otros métodos de control BD, API, etc.
const control = new ControlLocalStorage(cupon.getPreguntas().length);
const cp = new CuponManager(cupon, control);
