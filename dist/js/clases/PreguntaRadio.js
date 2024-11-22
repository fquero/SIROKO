import{crearElementoHTML as a}from"../utils/crearElementoHTML.js";class t{titular;descripcion;textoPregunta;opciones;constructor(t,r,e,o){this.titular=t,this.descripcion=r,this.textoPregunta=e,this.opciones=o}getTitular(){return this.titular}getDescrip(){return this.descripcion}getTextoPregunta(){return this.textoPregunta}renderizarInput(t){var r,e,o=a("form","formulario");for([r,e]of Object.entries(this.opciones)){var i=a("div","opcion");i.innerHTML=`
        <input type="radio" class="opcion__radio-input" id="op${r}" data-pregunta="SirokoP${t}" name="PreguntaSiroko" value="${e.valor}" ${"0"==r?"checked":""} />
        <label for="op${r}" class="opcion__radio-label">
          <span class="opcion__radio-button"></span>
          ${e.texto}
        </label>`,o.append(i)}return o}}export{t as PreguntaRadio};