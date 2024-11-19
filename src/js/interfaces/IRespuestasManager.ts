export interface IRespuestasManager {
  /*
        Determina si ya se ha iniciado el control de respuestas.
        Necesario para determinar si realizar operaciones de inicialización
        o de recuperación de respuestas.
    */
  isControlIniciado(): boolean;

  //Crea set de respuestas para actualizar y consultar sus valores
  crearSetDeRespuestas(cantidad: number): boolean;

  //Devuelve los valores de las respuestas
  getRespuestas(): Record<string, string | number | boolean | null>;

  //Actualiza el valor de una respuesta
  procesarRespuesta(
    nombre: string,
    valor: string | number | boolean | null
  ): boolean;
}
