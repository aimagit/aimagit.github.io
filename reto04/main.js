// referencias a elementos del DOM
let pantalla1 = document.getElementById("pantalla1");
let pantalla2 = document.getElementById("pantalla2");
let pantalla3 = document.getElementById("pantalla3");

let mostrarP2Btn = document.getElementById("mostrarP2");
let verTareasBtn = document.getElementById("verTareas");
let volverAtras = document.getElementById ("btnVolver")

let entrada = document.getElementById("entrada");
let agregarAlerta = document.getElementById("agregarAlerta");
let resultadoDiv = document.getElementById("resultado");

// Mostrar Pantalla 2 al hacer clic en el botón "Agregar alerta"
mostrarP2Btn.addEventListener("click", () => {
    pantalla1.style.display = "none"
    pantalla2.style.display = "block"
    pantalla3.style.display = "none"
});

// Agregar tarea al div resultado
agregarAlerta.addEventListener("click", () => {
    let texto = entrada.value.trim()

    if (texto !== "") {
        var alerta = document.createElement("p")
        var txt = document.createTextNode(texto)
        alerta.appendChild(txt)
        resultadoDiv.appendChild(alerta)
        
        resultadoDiv.style.color = "red"
        entrada.value = ""
    }
});

// Mostrar Pantalla 3 al hacer clic en el botón "Ver tareas"
verTareasBtn.addEventListener("click", () => {
    pantalla1.style.display = "none"
    pantalla2.style.display = "none"
    pantalla3.style.display = "block"

    // Copiar las tareas al div de Pantalla 3
    let tareas = resultadoDiv.innerHTML
    pantalla3.innerHTML = tareas
});

volverAtras.addEventListener("click", () => {
    pantalla1.style.display = "none"
    pantalla2.style.display = "block"
    pantalla3.style.display = "none"
    

});