import { ControlLocalStorage } from "./js/clases/ControlLocalStorage.js";
import { CuponManager } from "./js/clases/CuponManager.js";
import { CuponRadio } from "./js/clases/CuponRadio.js";
import { iniciarCuentaAtras } from "./js/utils/cuentaAtras.js";

//Datos estáticos. Se podrían extraer de BD, API, etc.
import { preguntas } from "./preguntas.js";

const minutosValidez = 20;

//Instancio el tipo de cupón radio
const cupon = new CuponRadio(minutosValidez, preguntas);

//Controlo respuestas mediante local storage
//se puede extender a otros métodos de control BD, API, etc.
const control = new ControlLocalStorage(cupon.getPreguntas().length);

const cp = new CuponManager(cupon, control);

const contenedor = document.querySelector("#contenedor")!;
contenedor.appendChild(cp.render());

//Control cupon creado
if (!localStorage.getItem("codigoCupon")) {
  eventosPreguntas();
} else {
  eventosCupon();
}

function eventosPreguntas(): void {
  const subcontenedor = document.querySelector(".subcontenedor")!;
  subcontenedor.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).classList.contains("btn")) {
      e.preventDefault();
      //Guardar info
      const seleccion = document.querySelector(
        'input[name="PreguntaSiroko"]:checked'
      )! as HTMLInputElement;
      const idpregunta = seleccion.dataset.pregunta ?? "";
      control.procesarRespuesta(idpregunta, seleccion.value);

      //Renderizar siguiente paso (nueva pregunta o cupón)
      subcontenedor.innerHTML = "";
      subcontenedor.appendChild(cp.render());

      if (localStorage.getItem("codigoCupon")) {
        console.log("Cupon creado,recargo");
        location.reload();
      }
    }
  });
}

function eventosCupon(): void {
  // Inicio cuenta atrás en el reloj
  // Pasamos el contenedor `reloj` donde se actualizará el tiempo
  // Esperar a que el DOM se haya actualizado para asegurar que el reloj esté en el contenedor
  setTimeout(() => {
    // Inicio cuenta atrás en el reloj
    iniciarCuentaAtras(
      localStorage.getItem("horaCupon")!,
      cupon.getTiempoValidez(),
      "crono__reloj",
      cp.anularCupon.bind(cp)
    );
  }, 0); // Ejecutar en el siguiente ciclo de eventos
}
