var estadoLicuadora = "apagada";
var sonidoLicuadora=document.getElementById("blender-sound");
var botonLicuadora=document.getElementById("blender-button-sound");
var licuadora= document.getElementById("blender");

function ControlarLicuadora() {
  if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendido";
    iniciarSonido();
    licuadora.classList.add("active");
    console.log("me prendiste");
  } else {
    estadoLicuadora = "apagada";
    iniciarSonido();
    licuadora.classList.remove("active");
    console.log("me apagaste");
  }
}
function iniciarSonido() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
        
}
    

