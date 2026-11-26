// src/dom.js — la vista: lee el estado y pinta la pantalla
import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  const resumen = document.querySelector("#resumen");

  // 1. Vaciamos la lista para repintar desde cero
  lista.replaceChildren();

  // 2. Un li por cada tarea del estado
  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;

    if (tarea.completada) {
      li.classList.add("completada");
    }

    lista.append(li);
  }

  // 3. Sincronizamos el resumen
  const completadas = contarCompletadas(estado.tareas);
  const pendientes = contarPendientes(estado.tareas);
  resumen.textContent = `${completadas} completadas · ${pendientes} pendientes`;
}