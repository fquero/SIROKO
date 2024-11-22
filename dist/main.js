import { ControlLocalStorage } from "./js/clases/ControlLocalStorage.js";
import { CuponManager } from "./js/clases/CuponManager.js";
import { CuponRadio } from "./js/clases/CuponRadio.js";
import { iniciarCuentaAtras } from "./js/utils/cuentaAtras.js";
//Datos estáticos. Se podrían extraer de BD, API, etc.
import { preguntas } from "./preguntas.js";
const minutos = 20;
//Instancio el tipo de cupón radio
const cupon = new CuponRadio(minutos, preguntas);
//Controlo respuestas mediante local storage
//se puede extender a otros métodos de control BD, API, etc.
const control = new ControlLocalStorage(cupon.getPreguntas().length);
const cp = new CuponManager(cupon, control);
const contenedor = document.querySelector("#contenedor");
contenedor.appendChild(cp.render());
//Control cupon creado
if (!localStorage.getItem("codigoCupon")) {
    eventosPreguntas();
}
else {
    eventosCupon();
}
function eventosPreguntas() {
    const subcontenedor = document.querySelector("#subcontenedor");
    subcontenedor.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn")) {
            e.preventDefault();
            //Guardar info
            const seleccion = document.querySelector('input[name="PreguntaSiroko"]:checked');
            const idpregunta = seleccion.dataset.pregunta ?? "";
            control.procesarRespuesta(idpregunta, seleccion.value);
            //Renderizar siguiente paso (nueva pregunta o cupón)
            subcontenedor.innerHTML = "";
            subcontenedor.appendChild(cp.render());
            if (localStorage.getItem("codigoCupon")) {
                console.log("Cupon creado,recargo");
                window.location.reload();
            }
        }
    });
}
function eventosCupon() {
    // Inicio cuenta atrás en el reloj
    // Pasamos el contenedor `reloj` donde se actualizará el tiempo
    iniciarCuentaAtras("01:01", 90, "crono__reloj", () => {
        console.log("¡Tiempo agotado!");
    });
}
