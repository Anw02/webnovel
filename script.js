const toggleButton = document.querySelector(".toggle-button");
const navSide = document.querySelector(".nav-side");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navSide.classList.toggle("active");
})