// ================= IMPORTS =================
import Random from "./random.js";

// ================= ELEMENTOS =================
const finalSecret = document.getElementById("finalSecret");  // Orbe final
const secretDialog = document.getElementById("secretDialog");  // Diálogos rotacionando

// TODO: faça um event delegation AQUI
const memoryBtn1 = document.getElementById("memoryBtn1");
const memory1 = document.getElementById("memory1")

// ================= VARIÁVEIS =================

// Diálogos que serão rotacionados
const dialogs = [
    "Eu preciso lembrar...",
    "Branco, tudo branco...",
    "Me ajude, quero lembrar...",
    "Tenho que lembrar, tenho...",
    "Tinha alguém, memória...",
    "Aquele dia...",
    "Quero ver de novo...",
    "Por favor, lembrar...",
    "Onde, onde que foi?",
    "Cadê você?"
]


// Função com o screen shake do segredo
finalSecret.addEventListener("click", () => {
    handleScreenShake();

})

// Looping da mensagem abaixo do finalSecret
setInterval(() => {

    secretDialog.classList.add("fadeOut");

    setTimeout( () => {
        secretDialog.classList.remove("fadeOut");
        secretDialog.textContent = Random.choose(...dialogs);
    }, 2000)

}, 7000);

memoryBtn1.addEventListener("click", () => {
    memory1.classList.add("activeMemory");
    memoryBtn1.remove();
})

// Adiciona a animação de recusa do click
function handleScreenShake() {
    document.body.classList.add("shake");

    document.body.addEventListener("animationend", () => {
        document.body.classList.remove("shake");

    })
}