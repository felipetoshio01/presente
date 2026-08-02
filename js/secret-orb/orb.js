// ================= ELEMENTOS =================
const finalSecret = document.getElementById("finalSecret");  // Orbe final

// Função com o screen shake do segredo
finalSecret.addEventListener("click", () => {
    handleScreenShake();

});

// Faz o screen shake
function handleScreenShake() {
    document.body.classList.add("shake");

    document.body.addEventListener("animationend", () => {
        document.body.classList.remove("shake");

    });
}
