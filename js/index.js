


const $retroceder = document.querySelector("#retroceder");
const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $avanzar = document.querySelector("#avanzar");
const $progress = document.querySelector("#range")

$play.addEventListener("click", reproduccion);
$pause.addEventListener("click", pause);
$retroceder.addEventListener("click", retroceder);
$avanzar.addEventListener("click", avanzar);
$video.addEventListener("loadedmetadata", duracion)
$video.addEventListener("timeupdate", avanceDuracion)
$progress.addEventListener("input", handleInput)

function reproduccion() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}
function pause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

function retroceder() {
  $video.currentTime = $video.currentTime - 10;
}

function avanzar() {
  $video.currentTime = $video.currentTime + 10;
}

function duracion(){
  $progress.max = $video.duration
  console.log("ha cargador mi video", $video.duration)
}

function avanceDuracion(){
   $progress.value = $video.currentTime
} 

function handleInput(){
   $video.currentTime = $progress.value;
   console.log($progress.value)
}