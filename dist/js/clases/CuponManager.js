import{crearElementoHTML as t}from"../utils/crearElementoHTML.js";class e{cupon;respuestas;constructor(e,a){this.cupon=e,this.respuestas=a}render(){for(var[e,a]of this.cupon.getPreguntas().entries())if(!localStorage.getItem("SirokoP"+e))return this._renderizarPregunta(e,a);return this._renderizarCupon(this.cupon.generarCodigo(this.respuestas.getRespuestas()))}_renderizarPregunta(e,a){var o=`Paso ${this.respuestas.getRespuestas().filter(e=>e.respuesta).length+1} de `+this.cupon.getPreguntas().length,r=a.getDescrip()??"",s=document.querySelector(".subcontenedor")??t("div","subcontenedor","",""),n=t("section","encabezado"),o=(n.innerHTML=`
      <span class="encabezado__indicador">${o}</span>
      <h1 class="encabezado__titulo">${a.getTitular()}</h1>
      <p class="encabezado__contenido">${r}</p>
      `,t("section","contenido")),r=(o.innerHTML=`
      <h2 class="contenido__subtitulo">${a.getTextoPregunta()}</h2>
    `,t("a","btn","Siguiente ","btnSend",'<i class="material-icons">arrow_right_alt</i>')),a=a.renderizarInput(e);return a.append(r),o.append(a),s.append(n,o),s}_renderizarCupon(e){var a=t("div"),o=t("section","encabezado"),r=(o.innerHTML=`
      <span class="encabezado__indicador">Tu premio está listo</span>
      <h1 class="encabezado__titulo">¡Enhorabuena!</h1>
    `,t("section","contenido"));return r.innerHTML=`
      <h2 class="contenido__subtitulo">Lo prometido es deuda</h2>
      <div class="cupon">
        <div class="codigo">
          <div class="codigo__texto">${e}</div>
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
        <a href="https://siroko.com" id="btnSend" class="btn" target="_blank" onclick="alert('Gracias por la oportunidad! - Fran :)');">
          Ir a siroko.com <i class="material-icons">arrow_right_alt</i>
        </a>
      </div>
    `,a.append(o,r),a}anularCupon(){document.querySelector(".crono__caducado__reiniciar")?.addEventListener("click",e=>{e.preventDefault(),localStorage.removeItem("codigoCupon"),localStorage.removeItem("horaCupon"),this.respuestas.limpiar(),location.reload()}),document.querySelector(".crono__cuentaatras")?.remove();var e=document.querySelector(".crono__caducado");e&&(e.style.display="flex")}}export{e as CuponManager};