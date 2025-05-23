
let nombres = []; // Declara el array nombres.
let entradaNombre = document.getElementById("entradaNombre"); //Declara la variable entradaNombre. Contiene el input del formulario entradaNombre.
let botonGuardar = document.getElementById("botonGuardar"); //Declara la variable botonGuardar. Contiene el botón del formulario que guarda los nombres en el array.
let botonBorrar = document.getElementById("botonBorrar"); // Declara la variable botonBorrar. Contiene el botón del formulario que elimina nombres del array.
let botonBorrarTodo = document.getElementById("botonBorrarTodo"); //Declara la variable botonBorrarTodo. Contiene el botón del formulario que borra todo el array.
let lista = document.getElementById("mostrarArray"); //Declara la variable lista. Contiene el div donde se va a ir mostrando en forma de lista el array.
let botonSorteo = document.getElementById("botonSorteo"); //Declara la variable botonSorteo. Contiene el botón que selecciona un nombre random.

//#### FUNCIÓN PARA AGREGAR NOMBRES AL ARRAY ####
function agregarNombre() {

    if (entradaNombre.value.trim() !== "") { //si el valor del formulario no es vacío entra al if. trim para eliminar los espacios antes y después.
        nombres.push(entradaNombre.value.trim());//añade el valor del formulario al array.
        console.log(nombres);//muestra el array en la consola.
        mostrarArray();//muestra el array convertido a lista en la web.
    } else { //si el valor está vacío
        console.log("El campo del formulario está vacío.");//mensaje en consola.
        
        alert("Debes introducir un nombre válido.");//mensaje pop-up.
    }

    entradaNombre.value = "";// Pone en blanco el formulario.
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
    mostrarArray()//muestra el array convertido a lista en la web.
}

botonBorrar.addEventListener("click", borrarNombre); // Cuando se pulse el botón Borrar se hace la función borrarNombre.

// #### FUNCIÓN PARA BORRAR TODO EL ARRAY ####
function borrarTodoArray(){
    nombres.splice(0, nombres.length);//Borra desde el índice 0 hasta la logitud completa del array.
    entradaNombre.value = ""; // Pone en blanco el formulario.
    console.log(nombres); // Muestra el array por la consola.
    mostrarArray()//muestra el array convertido a lista en la web.
}

botonBorrarTodo.addEventListener("click", borrarTodoArray);// Cuando se pulse el botón borrar todo se hace la función borrarTodoArray.

// #### FUNCIÓN PARA MOSTRAR EL ARRAY ####
function mostrarArray() {
    lista.innerHTML = ""; //Elimina el contenido del array. Si no se elimina se van añadiendo las posiciones del array que ya existen a la nueva una y otra vez, creando duplicados.

    for (let i = 0; i < nombres.length; i++) {//Hay que recorrer todas las posiciones del array.
        
        let elementoLista = document.createElement("li");//crea un elemento <li> y lo guarda en la variable elementoLista.
        let texto = document.createTextNode(nombres[i]);//el nombre del indice correspondiente a "i" lo guarda en la variable texto.
        elementoLista.appendChild(texto);//asigna el texto al <li> que ha creado antes.

        //Estilo para cada <li>
        elementoLista.style.fontSize = "30px";
        elementoLista.style.padding = "5px 10px";
        elementoLista.style.backgroundImage = "url('imagenes/fondolista.gif')";
        elementoLista.style.color = "darkmagenta";
        elementoLista.style.borderRadius = "5px";
        elementoLista.style.fontWeight = "bolder";

        lista.appendChild(elementoLista);//añade el <li> a la <ul> de mostrarArray.
    }
}

// #### FUNCIÓN PARA ESCOGER UN NOMBRE RANDOM ###
function nombreRandom() {
    if (nombres.length === 0) { //si el array está vacío.
        console.log("No has introducido nombres.")//muestra en la consola que el array está vacío.
        alert("No has introducido nombres.");//muestra un pop-up indicando que el array está vacío.
    } else { //si el array tiene nombres.
        let indiceRandom = Math.floor(Math.random() * nombres.length);//genera un numero entre 0 y 0.9^. Lo multiplica por la longitud del array. Lo redondea hacia abajo con Math.floor.
        let nombreSeleccionado = nombres[indiceRandom];//selecciona el nombre correspondiente al indiceRandom.

        if(nombreSeleccionado === "Pablo Cuecas"){//si sale mi nombre.
            console.log("¡" + nombreSeleccionado.toUpperCase() + " NO PUEDE SUSPENDER!");//muestra por consola que yo no puedo suspender.
            alert("¡" + nombreSeleccionado.toUpperCase() + " NO PUEDE SUSPENDER!")//muestra por pop-up que yo no puedo suspender.
        } else {//si es otro nombre.
            console.log("¡EL/LA AFORTUNAD@ ES " + nombreSeleccionado.toUpperCase() + "!");//muestra en consola el nombre seleccionado.
            alert("¡EL/LA AFORTUNAD@ ES " + nombreSeleccionado.toUpperCase() + "!");//muestra en un pop-up el nombre seleccionado.
        }
    }
}

botonSorteo.addEventListener("click", nombreRandom);//cuando se pulsa el botón botonSorteo hace la función nombreRandom.

