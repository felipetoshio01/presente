// ================= ELEMENTOS =================
const finalSecret = document.getElementById("finalSecret");  // Orbe final
const finalSecretWrapper = document.getElementById("finalSecretWrapper");

// Função com o screen shake do segredo
finalSecret.addEventListener("click", () => {
    handleScreenShake();

});

// Faz o screen shake
function handleScreenShake() {
    finalSecretWrapper.classList.add("shake");

    setTimeout( () => {
        finalSecretWrapper.classList.remove("shake");

    }, 200);

}
