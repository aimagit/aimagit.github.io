/*alert ("Jony, no llegue y lo hice cartonera wifi style, te debo el premium para la proxima!")
*/

let titulo = document.getElementById ("titulo")
let nombre = document.getElementById ("nombre")
let btn = document.getElementById ("btn")
let listado = document.getElementById("listado")
let tarea1 = document.getElementById("tarea1")
let tarea1txt = document.getElementById("tarea1txt"); // Agregamos el elemento del texto del checkbox
let verListado= document.getElementById("listado")


btn.addEventListener("click", () => {
    let tipo = nombre.value;
    titulo.innerHTML = tipo + " tus tareas del día son: "
    verListado.style.display = "block"
})

tarea1.addEventListener("click", () => {
    if (tarea1txt.checked) {
        tarea1txt.style.textDecoration = "line-through"; // Poner el texto en tachado
        alert("Completaste la tarea: " + tarea1txt.value);
    } else {
        tarea1txt.style.textDecoration = "none"; // Quitar el tachado
    }
});