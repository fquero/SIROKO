import { Respuesta } from "../types/RespuestaType";

export interface IRespuestasManager {
  /*
        Determina si ya se ha iniciado el control de respuestas.
        Necesario para determinar si realizar operaciones de inicialización
        o de recuperación de respuestas.
    */
  isControlIniciado(): boolean;

  //Crea set de respuestas en el sistema de persistencia que use
  crearSetDeRespuestas(cantidad: number): Array<Respuesta>;

  //Recupera set de respuestas
  recuperarSetDeRespuestas(cantidad: number): Array<Respuesta>;

  //Devuelve los valores de las respuestas
  getRespuestas(): Array<Respuesta>;

  //Actualiza el valor de una respuesta
  procesarRespuesta(
    nombre: string,
    valor: string | number | boolean | null
  ): boolean;

  //elimina las variables del sistema de persistencia que use
  limpiar(): boolean;
}
