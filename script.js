const toggle = document.querySelector(".toggle");
const input = document.querySelector(".pw");

toggle.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        toggle.classList.replace("uil-eye-slash", "uil-eye");
    } else {
        input.type = "password";
        toggle.classList.replace("uil-eye", "uil-eye-slash");
    }
})