function TiempoActual(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = date.getDate();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const miliseconds = date.getTime();

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves','Viernes',  'Sábado'];

    // Agregar al HTML: <p id="reloj"></p>

    const parrafo = document.getElementById('reloj');
    parrafo.innerHTML = `${diasSemana[day]}, ${today} de ${meses[month]} de ${year}, a las ${hour}:${minutes}:${seconds}`;

    if (`${hour}` > 12){
    parrafo.innerHTML = `${diasSemana[day]}, ${today} de ${meses[month]} de ${year}, a las ${hour -12}:${minutes}:${seconds} p.m.`;
    }else{
        parrafo.innerHTML = `${diasSemana[day]}, ${today} de ${meses[month]} de ${year}, a las ${hour}:${minutes}:${seconds} a.m.`;
    }
}


function CurrentTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = date.getDate();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const miliseconds = date.getTime();

    const meses = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

    const diasSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'];

    // Agregar al HTML: <p id="clock"></p>

    const parrafo2 = document.getElementById('clock');
    clock.innerHTML = `${diasSemana[day]}, ${meses[month]} ${today}, ${year}. ${hour}:${minutes}:${seconds}`;

    if (`${hour}` > 12){
    clock.innerHTML = `${diasSemana[day]}, ${meses[month]} ${today}th, ${year}. ${hour-12}:${minutes}:${seconds} p.m.`;
    }else{
        clock.innerHTML = `${diasSemana[day]}, ${meses[month]} ${today}th, ${year}. ${hour}:${minutes}:${seconds} a.m.`;
    }
}


const currentTime = setInterval(CurrentTime, 1000);
const tiempoActual = setInterval(TiempoActual, 1000);
// 