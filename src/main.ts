import { ControlLocalStorage } from "./js/clases/ControlLocalStorage.js";
import { CuponManager } from "./js/clases/CuponManager.js";
import { CuponRadio } from "./js/clases/CuponRadio.js";
import { preguntas } from "./preguntas";

//Datos estáticos. Se podrían extraer de BD, API, etc.
/*const preguntas = [
  {
    titular: "Vamos allá",
    descripcion:
      "Has llegado hasta el test de Siroko. Responde las siguientes preguntas y genera tu código premiado a medida.",
    textoPregunta: "Uso Siroko desde...",
    opciones: [
      {
        valor: "2016",
        texto: "2016",
      },
      {
        valor: "2017",
        texto: "2017",
      },
      {
        valor: "2018",
        texto: "2018",
      },
      {
        valor: "2019",
        texto: "2019",
      },
      {
        valor: "2020",
        texto: "2020",
      },
      {
        valor: "2021",
        texto: "2021",
      },
    ],
  },
  {
    titular: "Vamos, una más",
    descripcion: null,
    textoPregunta: "Por unas gafas Siroko yo...",
    opciones: [
      {
        valor: "Segaría a navaja",
        texto: "Segaría a navaja",
      },
      {
        valor: "Rechazaría un cachopo",
        texto: "Rechazaría un cachopo",
      },
      {
        valor: "Renunciaría a mis tierras",
        texto: "Renunciaría a mis tierras",
      },
      {
        valor: "Regalaría una ternera",
        texto: "Regalaría una ternera",
      },
    ],
  },
];*/
console.log("GOGOGOOGOGOGOOOOOOOOOOOOOOOs");
console.log(preguntas);
const minutos = 20;

//Instancio el tipo de cupón radio
const cupon = new CuponRadio(minutos, preguntas);

//Controlo respuestas mediante local storage
//se puede extender a otros métodos de control BD, API, etc.
const control = new ControlLocalStorage(cupon.getPreguntas().length);

const cp = new CuponManager(cupon, control);
