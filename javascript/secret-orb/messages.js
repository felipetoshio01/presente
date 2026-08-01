// ================= IMPORTS =================
import Random from "../modules/random.js";

// ================= ELEMENTOS =================
const finalSecret = document.getElementById("finalSecret");  // Orbe final

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

// Looping da mensagem abaixo do finalSecret
setInterval(() => {

    // Ativa a animação
    secretDialog.classList.add("fadeOut");

    // Após 2 segundos (animação termina)
    setTimeout( () => {
        secretDialog.classList.remove("fadeOut");
        secretDialog.textContent = Random.choose(...dialogs);
    }, 2000)

}, 7000);
