

const listaNotas = document.getElementById("listaNotas");
const boton = document.getElementById("boton");
const texto = document.getElementById("input");

// 1. Cargar notas desde localStorage al iniciar
let notas = [];

const notasGuardadas = localStorage.getItem("notas");
if (notasGuardadas) {
    notas = JSON.parse(notasGuardadas);
    console.log(`Se cargaron ${notas.length} notas desde localStorage`);
    notas.forEach(nota => renderizarNota(nota));
} else {
    console.log("No hay notas guardadas");
}

// 2. Función para renderizar una nota en el DOM
function renderizarNota(texto) {
    const li = document.createElement("li");
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
        // Eliminar del DOM
        listaNotas.removeChild(li);

        // Eliminar del arreglo y guardar
        notas = notas.filter(n => n !== texto);
        guardarEnLocalStorage();

        console.log("Nota eliminada");
    });

    li.appendChild(btnEliminar);
    listaNotas.appendChild(li);
}

// 3. Función para guardar el arreglo en localStorage
function guardarEnLocalStorage() {
    localStorage.setItem("notas", JSON.stringify(notas));
}

// 4. Evento del botón agregar
boton.addEventListener("click", () => {
    if (texto.value.trim() === "") {
        alert("¡Está vacío, llénalo!");
        return;
    }

    const nuevaNota = texto.value.trim();

    // Agregar al arreglo y guardar
    notas.push(nuevaNota);
    guardarEnLocalStorage();

    // Renderizar en el DOM
    renderizarNota(nuevaNota);

    texto.value = "";

    // En guardarEnLocalStorage():
function guardarEnLocalStorage() {
    localStorage.setItem("notas", JSON.stringify(notas));
    console.log("💾 Guardado en localStorage:", notas); // ← agrega esto
}

// En el botón agregar, después de push():
notas.push(nuevaNota);
console.log("✅ Nota agregada. Lista actual:", notas); // ← agrega esto
guardarEnLocalStorage();
});
