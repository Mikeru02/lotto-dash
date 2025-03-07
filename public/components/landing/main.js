// main.js

import '/styles/common.css';  // Import the common styles
import styles from "./landing.module.css";
import loginStyles from "./login.module.css";

// Function to handle rendering the HTML structure
export default function Main(root) {
  root.innerHTML = `
    <div class="main-content">
        <div class="contents">
            <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1741104136/Blue_and_Black_Simple_Coming_Soon_Banner_1_n0w5us.jpg" alt="Banner" class="banner">
            <h4 class="last-winning-draw">Last Winning Draw</h4>
            <hr>
            <div class="last-winning-draw">
                <div class="number-box">09</div>
                <div class="number-box">22</div>
                <div class="number-box">03</div>
                <div class="number-box">07</div>
                <div class="number-box">02</div>
                <div class="number-box">04</div>
            </div>
            <div class="winners">
                <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740659836/Screenshot_2025-02-27_203626-removebg-preview_mose29.png" alt="Winning Ticket" class="winner-icon">
                <h4>Last Draw Winners</h4>
                <hr>
                <p>Mwehehehe</p>
            </div>
        </div>
    </div>

    <!-- Modal Part (Log in | Sign Up) -->
    <div class="modal" id="authModal">
        <span class="close-btn" id="closeModalBtn">&times;</span> 
        <div class="modal-content">
            <div class="container">
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form action="#">
                            <h1>Sign Up</h1>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="#">
                            <h1>Log in</h1>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Log In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details<br>and let your lucky journey start here!</p>
                                <button class="ghost" id="signIn">Log In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Join with us</h1>
                                <p>Get ready for fortune, start your journey with us today!</p>
                                <button class="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;

  // Apply the styles to the root element
  root.classList.add(styles['main']);  // Apply main CSS class from landing.module.css
  root.classList.add(loginStyles['main']);  // Apply login CSS class from login.module.css
}

// Function to handle event listeners for the page
function addEventListeners() {
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
  const closeModalBtn = document.querySelector(".close-btn");

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

// Main entry point to combine both rendering and event handling
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');  // Assuming your root element has the ID 'root'
  
  renderMainContent(root);  // Render the main content
  addEventListeners();  // Set up all the event listeners
});
