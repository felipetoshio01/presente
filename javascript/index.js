// ================= IMPORTS =================
import Random from "./random.js";

// ================= ELEMENTOS =================
const finalSecret = document.getElementById("finalSecret");  // Orbe final
const secretDialog = document.getElementById("secretDialog");  // Diálogos rotacionando

const memoryArea = document.getElementById("memoryArea");  // Local onde estão as memórias

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

    // Ativa a animação
    secretDialog.classList.add("fadeOut");

    // Após 2 segundos (animação termina)
    setTimeout( () => {
        secretDialog.classList.remove("fadeOut");
        secretDialog.textContent = Random.choose(...dialogs);
    }, 2000)

}, 7000);


// Ativação das memórias
memoryArea.addEventListener("click", event => {

    // Retorna se não for o botão
    if (!event.target.matches(".memoryBtn")) return;

    // Captura a instância da memória do botão
    let memory = event.target.parentElement;

    // Retira o botão
    event.target.remove();

    // Inicia a animação
    memory.classList.add("activating");

    // Após 4 segundos (animação termina)
    setTimeout( () => {
        memory.classList.remove("activating");

        // Ativa a memória
        memory.classList.add("activeMemory");
    }, 4000);

    
})

// Adiciona a animação de recusa do click
function handleScreenShake() {
    document.body.classList.add("shake");

    document.body.addEventListener("animationend", () => {
        document.body.classList.remove("shake");

    })
}