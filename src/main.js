import "./style.css";

import { estado } from "./estado.js";
import {
  contarPendientes,
  contarCompletadas,
} from "./tareas.js";

// Seleccionamos el h1
const titulo = document.querySelector("h1");

// Cambiamos el texto
titulo.textContent = "Gestor de tareas";

// Añadimos la clase
titulo.classList.add("titulo");

// Seleccionamos el resumen
const resumen = document.querySelector("#resumen");

// Contamos las tareas pendientes
const pendientes = contarPendientes(estado.tareas);

// Actualizamos el resumen
resumen.textContent = `Tienes ${pendientes} tareas pendientes`;


// Mini-reto 2
const lista = document.querySelector("#lista");

// Creamos los tres elementos demo
const demo1 = document.createElement("li");
demo1.classList.add("demo");
demo1.textContent = "Primera tarea de prueba";

const demo2 = document.createElement("li");
demo2.classList.add("demo");
demo2.textContent = "Segunda tarea de prueba";

const demo3 = document.createElement("li");
demo3.classList.add("demo");
demo3.textContent = "Tercera tarea de prueba";

// Los añadimos a la lista
lista.append(demo1, demo2, demo3);

// Seleccionamos todos los li.demo
const elementosDemo = document.querySelectorAll("li.demo");

// Recorremos los elementos
elementosDemo.forEach((elemento) => {
  elemento.textContent = "- " + elemento.textContent;
});


// Mini-reto 2b
/* Seleccionamos #lista con getElementById.
Respuesta: el argumento NO lleva #. */
const listaPorId = document.getElementById("lista");

// Seleccionamos los elementos demo
const elementosHTML = document.getElementsByClassName("demo");

/*
Intento de recorrer con forEach:

elementosHTML.forEach((elemento) => {
  console.log(elemento);
});

Error de consola:
elementosHTML.forEach is not a function

La HTMLCollection no tiene forEach directamente.
*/

// Recorrido correcto con Array.from()
Array.from(elementosHTML).forEach((elemento) => {
  elemento.textContent = elemento.textContent.replace("- ", "✓ ");
});

