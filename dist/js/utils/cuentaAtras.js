import { crearElementoHTML } from "./crearElementoHTML.js";
export const iniciarCuentaAtras = function (horaInicio, minutos, clase_reloj, callback) {
    const ahora = new Date();
    const [hora, minuto] = horaInicio.split(":").map(Number); // HH:mm
    const horaObjetivo = new Date(ahora);
    // Hora inicial
    horaObjetivo.setHours(hora, minuto, 0, 0);
    // Minutos adicionales a la hora objetivo
    horaObjetivo.setMinutes(horaObjetivo.getMinutes() + minutos);
    //Diferencia en milisegundos
    const diferencia = horaObjetivo.getTime() - ahora.getTime();
    const reloj = document.querySelector(".crono__reloj") ??
        crearElementoHTML("span", "crono__reloj");
    // El tiempo terminó
    if (diferencia <= 0) {
        reloj.innerHTML = "00:00";
        callback();
        return;
    }
    let segundos = Math.floor(diferencia / 1000);
    // Función para mostrar el tiempo restante en el reloj
    const mostrarTiempo = () => {
        const minutosRestantes = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        reloj.innerHTML = `${minutosRestantes}:${segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes}`;
    };
    // Actualizar reloj cada segundo
    const intervalo = setInterval(() => {
        segundos--;
        mostrarTiempo();
        if (segundos <= 0) {
            clearInterval(intervalo);
            reloj.innerHTML = "00:00"; // contenido final "00:00"
            callback();
        }
    }, 1000);
};
//# sourceMappingURL=cuentaAtras.js.map