// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

// ==========================================
// Mini-Reto 1: querySelector, texto y clases
// ==========================================
const h1 = document.querySelector("h1");
h1.textContent = "Gestor de tareas";
h1.classList.add("titulo");

const resumen = document.querySelector("#resumen");
resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;

// ==========================================
// Mini-Reto 2: querySelectorAll
// ==========================================
const lista = document.querySelector("#lista");

for (const texto of ["Primero", "Segundo", "Tercero"]) {
  const li = document.createElement("li");
  li.className = "demo";
  li.textContent = texto;
  lista.append(li);
}

const demosNodeList = document.querySelectorAll(".demo");
demosNodeList.forEach((li) => {
  li.textContent = "- " + li.textContent;
});

// ==========================================
// Mini-Reto 2b: getElementById, getElementsByClassName y HTMLCollection
// ==========================================

// 1) ¿Lleva # el argumento de getElementById?
//    NO. getElementById recibe el id a secas ("lista"), sin "#".
//    El "#" solo se usa en los selectores CSS de querySelector.
const listaClasica = document.getElementById("lista");

// 2) getElementsByClassName: la clase va sin punto
const demos = listaClasica.getElementsByClassName("demo");

// 3) Recorrerlas con .forEach rompe. Lo envuelvo en try/catch
//    solo para que el script siga y poder ver el error:
try {
  demos.forEach((li) => console.log(li));
} catch (error) {
  console.error(error);
}
// Error en consola: TypeError: demos.forEach is not a function
// (una HTMLCollection no tiene forEach, solo la NodeList lo tiene)

// 4) Recorrido correcto con Array.from: cambio "- " por "✓ "
Array.from(demos).forEach((li) => {
  li.textContent = li.textContent.replace("- ", "✓ ");
});

// 5) ¿Viva o estática?
//    - HTMLCollection (getElementsByClassName): VIVA. Si añado o quito
//      nodos del DOM, se actualiza sola.
//    - NodeList de querySelectorAll (Mini-Reto 2): ESTÁTICA. Es una foto
//      fija del momento en que la pedí.