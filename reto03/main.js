/*alert ("Jony, no llegue y lo hice cartonera wifi style, te debo el premium para la proxima!")
*/

let titulo = document.getElementById ("titulo")
let nombre = document.getElementById ("nombre")
let btn = document.getElementById ("btn")
let check = document.getElementById ("tarea")
let label = document.getElementById ("tarea1")
let mostrarListado = document.getElementById("btn");
let listado = document.getElementById("listado");

btn.addEventListener ("click",() => {
    let tipo = nombre.value
    titulo.innerHTML = tipo + " tus tareas del día son: "
})

check.addEventListener ("click", () => {
    if (check.checked) {
        label.style.textDecoration = "line-through";
        alert ("Completaste la tarea: " + label.textContent)
    } else {
        label.style.textDecoration = "none";
    }
});

mostrarListado.addEventListener("click", () => {
    listado.style.display = "block"
})