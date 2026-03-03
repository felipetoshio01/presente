// ================= IMPORTS =================
import Random from "./random.js";

const finalSecret = document.getElementById("finalSecret");
const secretDialog = document.getElementById("secretDialog");

const dialogs = [
    "Eu preciso lembrar...",
    "Branco, tudo branco...",
    "Me ajude, quero lembrar...",
    "Tenho que lembrar, tenho...",
    "Tinha alguém...",
    "Aquele dia...",
    "Quero ver de novo...",
    "Por favor...",
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

// Adiciona a animação de recusa do click
function handleScreenShake() {
    document.body.classList.add("shake");

    document.body.addEventListener("animationend", () => {
        document.body.classList.remove("shake");

    })
}


