let hours = 7;
let minutes = 0;
let seconds = 0;
loadSeconds();

//Definimos y ejecutamos los segundos

function loadSeconds(){
  let txtSeconds;

  if(seconds < 0){
    seconds = 59;
  }

  //Mostrar segundos en pantalla

  if(seconds < 10){
    txtSeconds = `0${seconds}`
  }
  else{
    txtSeconds = seconds;
  }

  document.getElementById('seconds').innerHTML = txtSeconds;
  seconds--;

  loadMinutes(seconds);
}

function loadMinutes(seconds){
  let txtMinutes;

  if(seconds == -1 && minutes !== 0){
    setTimeout(()=> {
      minutes--;
    },500)
  }
  else if(seconds == -1 && minutes == 0){
    setTimeout(()=>{
      minutes = 59;
    },500)
  }

  //mostrar minutos en pantalla
  if(minutes < 10){
    txtMinutes = `0${minutes}`;
  }
  else{
    txtMinutes = minutes;
  }
  document.getElementById('minutes').innerHTML = txtMinutes;

  loadHours(seconds, minutes);
}

function loadHours(seconds, minutes){
  let txtHours;

  if(seconds == -1 && minutes == 00 && hours !== 0){
    setTimeout(()=>{
      hours--;
    },500)
  }
  else if(seconds == -1 && minutes == 00 && hours !== 0){
    setTimeout(()=>{
      hours = 2;
    },500)
  }

  //Mostrar horas en pantalla

  if(hours < 10){
    txtHours = `0${hours}`;
  }
  else{
    txtHours = hours;
  }

  document.getElementById('hours').innerHTML = txtHours;
}

//Ejecutamos cada segundo
setInterval(loadSeconds, 1000);