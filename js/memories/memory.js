// ================= ELEMENTOS =================
const body = document.body
const memoryArea = document.getElementById("memoryArea");  // Local onde estão as memórias
const alert = document.getElementById("alert");  // alerta para subir
const ring = document.getElementById("ringWrapper");  // anéis

let isActivating = false;
let memoryCount = 0;

// Ativação das memórias
memoryArea.addEventListener("click", event => {

    // Retorna se não for o botão
    if (!event.target.matches(".memoryBtn")) return;

    // Se já está ativando uma memória, bloqueie
    if (isActivating) return;

    // Captura a instância da memória do botão
    let memory = event.target.parentElement;

    // Ativa a memóra
    activateMemory(memory);

    // Aplica o blur
    blurScreen();

    // Retira o botão
    event.target.remove();
});

function blurScreen() {
    // div que fará o efeito do blur
    const blurDiv = document.createElement("div");

    blurDiv.id = "screenBlur";

    // Vê se a o width > height ou width < height
    if (window.innerWidth >= window.innerHeight) {
        blurDiv.classList.add("wideBlur");

    } else {
        blurDiv.classList.add("longBlur");
        console.log("longo");
    }

    document.body.append(blurDiv);

    // Após que a div crescer completamente
    blurDiv.addEventListener("animationend", () => {
        blurDiv.classList.add("fadeOut");

        // Após o fadeOut (4 segundos)
        setTimeout(() => {
            blurDiv.remove();
        }, 4000);
    });
}

// Ativa a memória
function activateMemory(memory) {
    isActivating = true;

     // Após 4 segundos (animação termina)
    setTimeout( () => {
        // Ativa a memória
        memory.classList.add("activeMemory");

        updateSite();

        isActivating = false;

    }, 4000);

}


// Muda o body
function updateSite() {
    memoryCount++;

    let oldStage = `stage${memoryCount - 1}`;
    let newStage = `stage${memoryCount}`;

    body.classList.replace(oldStage, newStage);

    // Se está no último estágio, ative a mensagem e o anel
    if (memoryCount == 5) {
        activateRing();

        // Um delay para ser mais fácil de ler
        setTimeout( () => {showAlert();}, 4000);
    }
}

// Faz surgir a mensagem
function showAlert() {
    alert.classList.add("show");

    setTimeout( () => {
        alert.classList.remove("show");

    }, 10000);
}

// Coloca os anéis no orbe
function activateRing() {
    ring.style.display = "grid";
}
