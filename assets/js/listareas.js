// Elementos HTML
const inputTarea = document.getElementById("Tareanueva");
const btnAgregar = document.getElementById("agregartarea");
const tablaTareas = document
  .getElementById("listadodetareas")
  .getElementsByTagName("tbody")[0];
const contadorTareas = document.getElementById("cuenta_tareas");
const contadorRealizadas = document.getElementById("tarea_realizada");

// Arreglo para almacenar las tareas
let listaTareas = [
  { id: "1711573204869", nombre: "Hacer yoga", realizada: false },
  { id: "1711573204868", nombre: "Hacer mercado", realizada: false },
  { id: "1711573204866", nombre: "Terminar el informe", realizada: false },
  { id: "1711573204865", nombre: "Pasear al perro", realizada: false },
];

// Función para actualizar la tabla de tareas
function actualizarTabla() {
  tablaTareas.innerHTML = "";
  listaTareas.forEach((tarea) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td>
                <button onclick="marcarRealizada('${tarea.id}')">${
      tarea.realizada ? "Desmarcar" : "Marcar"
    }</button>
                <button style="color: red;" onclick="eliminarTarea('${
                  tarea.id
                }')">X</button>
            </td>
        `;
    if (tarea.realizada) {
      row.style.color = "green"; // Cambia el color del texto a verde si la tarea está realizada
    }
    tablaTareas.appendChild(row);
  });
  actualizarContadores();
  inputTarea.value = "";
  console.log(tareas);
}

// Función para actualizar los contadores de tareas
function actualizarContadores() {
  contadorTareas.textContent = listaTareas.length;
  contadorRealizadas.textContent = listaTareas.filter(
    (tarea) => tarea.realizada
  ).length;
}

// Función para agregar una nueva tarea
function agregarTarea() {
  const nuevaTarea = {
    id: Date.now().toString(),
    nombre: inputTarea.value,
    realizada: false,
  };
  listaTareas.push(nuevaTarea);
  actualizarTabla();
  inputTarea.value = "";
}

// Función para marcar o desmarcar una tarea como realizada
function marcarRealizada(id) {
  const tarea = listaTareas.find((t) => t.id === id);
  if (tarea) {
    tarea.realizada = !tarea.realizada;
    actualizarTabla();
  }
}

// Función para eliminar una tarea
function eliminarTarea(id) {
  listaTareas = listaTareas.filter((t) => t.id !== id);
  actualizarTabla();
}

// Evento de clic en el botón "Agregar"
btnAgregar.addEventListener("click", agregarTarea);

// Actualizar la tabla al cargar la página
actualizarTabla();
