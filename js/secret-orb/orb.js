import {dialogChange} from "./messages.js";

// ================= ELEMENTOS =================
const finalSecret = document.getElementById("finalSecret");  // Orbe final
const finalSecretWrapper = document.getElementById("finalSecretWrapper");
const body = document.body;

let activating = false;

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
    if (activating) return;

    blurScreen();

    setTimeout( () => {
        removeElements();
        createHeart();
    }, 3000);  
}

function removeElements() {
    Array.from(finalSecretWrapper.children).forEach(element => {
        element.remove()
    });
}

function createHeart() {
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

// Cria o blur na screen
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
