import {dialogChange} from "./messages.js";

// ================= ELEMENTOS =================
const finalSecret = document.getElementById("finalSecret");  // Orbe final
const finalSecretWrapper = document.getElementById("finalSecretWrapper");
const body = document.body;

// Função com o screen shake do segredo
finalSecret.addEventListener("click", () => {
    
    if (body.classList.contains("stage5")) {
        clearInterval(dialogChange);
        openOrb();
        
    } else {
        handleScreenShake();

    }
});

// Faz o screen shake
function handleScreenShake() {
    finalSecretWrapper.classList.add("shake");

    setTimeout( () => {
        finalSecretWrapper.classList.remove("shake");

    }, 200);

}

function openOrb() {
    Array.from(finalSecretWrapper.children).forEach(element => {
        element.remove()
    });

    finalSecretWrapper.innerHTML = `
        <div id="heartWrapper">
            <div id="beatWrapper">
                <div class="beat"></div>
                <div class="beat"></div>
                <div class="beat"></div>
            </div>

            <div id="heart"></div>
        </div>
        
        <h2 id="heartMessage">Feliz aniversário amor!</h2>
    `
}
