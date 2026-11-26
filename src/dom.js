
import { estado } from "./estado.js";
import {
  contarPendientes,
  contarCompletadas,
} from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  const resumen = document.querySelector("#resumen");

  // Vaciamos la lista antes de volver a pintarla
  lista.replaceChildren();

  // Recorremos las tareas del estado
  for (const tarea of estado.tareas) {
    const li = document.createElement("li");

    // Ponemos el texto de la tarea
    li.textContent = tarea.texto;

    // Si está completada, añadimos la clase
    if (tarea.completada) {
      li.classList.add("completada");
    }

    // Añadimos el li a la lista
    lista.append(li);
  }

  // Calculamos las tareas completadas y pendientes
  const completadas = contarCompletadas(estado.tareas);
  const pendientes = contarPendientes(estado.tareas);

  // Actualizamos el resumen
  resumen.textContent =
    `${completadas} completadas · ${pendientes} pendientes`;
}
