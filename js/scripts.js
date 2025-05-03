
let nombres = []; // Declara el array nombres.
let entradaNombre = document.getElementById("entradaNombre"); //Declara la variable entradaNombre. Contiene el input del formulario entradaNombre.
let botonGuardar = document.getElementById("botonGuardar"); //Declara la variable botonGuardar. Contiene el botón del formulario que guarda los nombres en el array.
let botonBorrar = document.getElementById("botonBorrar"); // Declara la variable botonBorrar. Contiene el botón del formulario que elimina nombres del array.
let botonBorrarTodo = document.getElementById("botonBorrarTodo"); //Declara la variable botonBorrarTodo. Contiene el botón del formulario que borra todo el array.

//#### FUNCIÓN PARA AGREGAR NOMBRES AL ARRAY ####
function agregarNombre() {

    nombres.push(entradaNombre.value); // agrega al final del array el valor de entradaNombre(valor escrito en el formulario).
    entradaNombre.value = ""; // Después de añadir el valor, entradaNombre se queda vacío para no tener que borrar constantemente cuando se vuelve a añadir.
    console.log(nombres); // Muestra el array en la consola.
    mostrarArray()// mostrar el array en el propio documento.
}

botonGuardar.addEventListener("click", agregarNombre); // Cuando se pulse el botón Guardar se hace la función agregarNombre.


// #### FUNCIÓN PARA BORRAR UN NOMBRE DEL ARRAY ####
function borrarNombre() {

    let nombreBorrar = entradaNombre.value; // Guarda en la variable nombreBorrar el valor del formulario.
    let indiceBorrar = nombres.indexOf(nombreBorrar); //Busca en el array nombreBorrar y guarda su posición en indiceBorrar. Si es -1 es que no existe.

    if (indiceBorrar !== -1) { //Si indiceBorrar NO es -1.
        nombres.splice(indiceBorrar, 1); //Elimina del array un elemento a partir del indice indiceBorrar(es decir a él mismo).
        console.log("Se ha eliminado a: " + nombreBorrar); //Muestra un mensaje en la consola con el nombre eliminado.
    } else { //Si el indiceBorrar es -1
        console.log("No se encuentra ese nombre");// Muestra un mensaje en la consola para indicar que el nombre no existe.
    }

    entradaNombre.value = ""; // Pone en blanco el formulario.
    console.log(nombres); // Muestra el array por la consola.
    mostrarArray()// mostrar el array en el propio documento.
}

botonBorrar.addEventListener("click", borrarNombre); // Cuando se pulse el botón Borrar se hace la función borrarNombre.

// #### FUNCIÓN PARA BORRAR TODO EL ARRAY ####
function borrarTodoArray(){
    nombres.splice(0, nombres.length);//Borra desde el índice 0 hasta la logitud completa del array.
    entradaNombre.value = ""; // Pone en blanco el formulario.
    console.log(nombres); // Muestra el array por la consola.
    mostrarArray()// mostrar el array en el propio documento.
}

botonBorrarTodo.addEventListener("click", borrarTodoArray);// Cuando se pulse el botón borrar todo se hace la función borrarTodoArray.

// #### FUNCIÓN PARA MOSTRAR EL ARRAY ####
function mostrarArray() {
    let mostrarNombres = document.getElementById("mostrarArray");
    mostrarNombres.textContent = nombres; // mostrar el array en el propio documento.
}




