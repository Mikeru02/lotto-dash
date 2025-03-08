document.addEventListener("DOMContentLoaded", function () {
    // Panel switch elements
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

    // Modal for Log in | Sign up
    const modal = document.getElementById("authModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.querySelector(".close-btn");

    if (openModalBtn && modal) {
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
