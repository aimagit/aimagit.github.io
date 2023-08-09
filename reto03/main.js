/*alert ("No llegue y lo hice cartonera wifi style, te debo el premium para la proxima!")*/


let titulo = document.getElementById ("titulo")
let nombre = document.getElementById ("nombre")
let btn = document.getElementById ("btn")
let listado = document.getElementById("listado")
let verListado= document.getElementById("listado")
let check1 = document.getElementById("tarea1txt")
let label1 = document.getElementById("tarea1")
let check2 = document.getElementById("tarea2txt")
let label2 = document.getElementById("tarea2")
let check3 = document.getElementById("tarea3txt")
let label3 = document.getElementById("tarea3")
let check4 = document.getElementById("tarea4txt")
let label4 = document.getElementById("tarea4")
let check5 = document.getElementById("tarea5txt")
let label5 = document.getElementById("tarea5")
let check6 = document.getElementById("tarea6txt")
let label6 = document.getElementById("tarea6")
let check7 = document.getElementById("tarea7txt")
let label7 = document.getElementById("tarea7")
let check8 = document.getElementById("tarea8txt")
let label8 = document.getElementById("tarea8")
let check9 = document.getElementById("tarea9txt")
let label9 = document.getElementById("tarea9")
let check10 = document.getElementById("tarea10txt")
let label10 = document.getElementById("tarea10")

btn.addEventListener("click", () => {
    let tipo = nombre.value;
    titulo.innerHTML = tipo + " tus tareas del día son: "
    verListado.style.display = "block"
})

check1.addEventListener("click", () => {
    if (check1.checked) {
        label1.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label1.textContent)
    } else {
        label1.style.textDecoration = "none"
    }
})

check2.addEventListener("click", () => {
    if (check2.checked) {
        label2.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label2.textContent)
    } else {
        label2.style.textDecoration = "none"
    }
})

check3.addEventListener("click", () => {
    if (check3.checked) {
        label3.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label3.textContent)
    } else {
        label3.style.textDecoration = "none"
    }
})

check4.addEventListener("click", () => {
    if (check4.checked) {
        label4.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label4.textContent)
    } else {
        label4.style.textDecoration = "none"
    }
})

check5.addEventListener("click", () => {
    if (check5.checked) {
        label5.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label5.textContent)
    } else {
        label5.style.textDecoration = "none"
    }
})

check6.addEventListener("click", () => {
    if (check6.checked) {
        label6.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label6.textContent)
    } else {
        label6.style.textDecoration = "none"
    }
})

check7.addEventListener("click", () => {
    if (check7.checked) {
        label7.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label7.textContent)
    } else {
        label7.style.textDecoration = "none"
    }
})

check8.addEventListener("click", () => {
    if (check8.checked) {
        label8.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label8.textContent)
    } else {
        label8.style.textDecoration = "none"
    }
})

check9.addEventListener("click", () => {
    if (check9.checked) {
        label9.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label9.textContent)
    } else {
        label9.style.textDecoration = "none"
    }
})

check10.addEventListener("click", () => {
    if (check10.checked) {
        label10.style.textDecoration = "line-through"
        alert ("Completaste la tarea: " + label10.textContent)
    } else {
        label10.style.textDecoration = "none"
    }
})