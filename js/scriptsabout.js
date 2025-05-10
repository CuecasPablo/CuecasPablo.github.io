let botonEnviar = document.getElementById("botonEnviar");//Declara la variable botonEnviar. Contiene el botón que envía el formulario a la consola.
let nombre = document.getElementById("nombre"); //Declara la variable nombre. Contiene el valor de nombre del formulario.
let email = document.getElementById("email");//Declara la variable email. Contiene el valor de email del formulario.
let mensaje = document.getElementById("mensaje");//Declara la variable menaje. Contiene el valor de mensaje del formulario.

//#### FUNCIÓN PARA MOSTRAR POR CONSOLA LOS DATOS DEL FORMULARIO ####
function formularioACosola(){
    console.log("Nombre: " + nombre.value);//Muestra por consola el valor de nombre.
    console.log("Email: " + email.value);//Muestra por consola el valor de email.
    console.log("Mensaje: " + mensaje.value);//Muestra por consola el valor de mensaje.
}

botonEnviar.addEventListener("click", formularioACosola);// Cuando se pulse el botón enviar se hace la función formularioACosola.