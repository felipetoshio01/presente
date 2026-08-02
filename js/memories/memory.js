// ================= ELEMENTOS =================
const memoryArea = document.getElementById("memoryArea");  // Local onde estão as memórias

// Ativação das memórias
memoryArea.addEventListener("click", event => {

    // Retorna se não for o botão
    if (!event.target.matches(".memoryBtn")) return;

    // Captura a instância da memória do botão
    let memory = event.target.parentElement;

    // Retira o botão
    event.target.remove();

    // Aplica o blur
    blurScreen();

    // Após 4 segundos (animação termina)
    setTimeout( () => {
        // Ativa a memória
        memory.classList.add("activeMemory");
    }, 5000);


})

function blurScreen() {
    // div que fará o efeito do blur
    const blurDiv = document.createElement("div");
    blurDiv.id = "screenBlur";

    document.body.append(blurDiv);

    // Após que a div crescer completamente
    blurDiv.addEventListener("animationend", () => {
        blurDiv.classList.add("fadeOut");

        // Após o fadeOut (4 segundos)
        setTimeout(() => {
            blurDiv.remove()
        }, 4000);
    });
    
} 