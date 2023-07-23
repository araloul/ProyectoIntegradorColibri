//Declaramos variables// mandamos llamar a los elementos
let nombre = document.getElementById('nombre');
let email = document.getElementById('name');
let telefono = document.getElementById('telefono');
let mensaje  = document.getElementById('mensaje');

let btnEnviar = document.getElementsByClassName('btnEnviar');
let btnLimpiar = document.getElementsByClassName('btnLimpiar');
let esValidoEmail = true;

/*

limpiar.addEventListener("click", function (event) {//marca error en la consola, pero no sé porqué 
    event.preventDefault();
    nombre.value = "";
    email.value = "";
    telefono.value = "";
    mensaje.value = "";




  });//addEventListener LIMPIAR
*/
/*
//Bonton envíar
btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    //console.log("Clicked");//comprobar
    //Aquí va el codigo para emmail de la pag https://smtpjs.com/
    email.send({
      SecureToken: "ff2d7265-4777-4877-8e7b-7da834c4ccfe",
      To: 'lic.aranzaquijano@gmail.com',
      From: "lic.aranzaquijano@gmail.com",
      Subject: "Esto es una prueba",
      Body: "Esto es un mensaje prueba"
    }).then(
      message => alert(message)
    );

  });//addEventListener ENVIAR*/



let regEx