// If need mo ng styles here kindly uncomment this 
// import styles from "./component.module.css";


export default function Events() {
  // Panel switch elements
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  // Switch between sign-up and sign-in forms
  if (signUpButton && signInButton && container) {
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  // Modal elements
  const modal = document.getElementById("authModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  if (openModalBtn && modal) {
    // Open modal
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // Close modal when clicking the close button
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    // Close modal if user clicks outside the modal box
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}

