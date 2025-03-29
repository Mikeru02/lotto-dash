// main.js

import styles from "./component.module.css";

// Function to handle rendering the HTML structure
export default function Main(root) {
  root.innerHTML = `
    <div class="${styles['main-content']}">
        <div class="${styles['contents']}">
            <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1741104136/Blue_and_Black_Simple_Coming_Soon_Banner_1_n0w5us.jpg" alt="Banner" class="${styles['banner']}">
            <div class="${styles['winners']}">
                <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740659836/Screenshot_2025-02-27_203626-removebg-preview_mose29.png" alt="Winning Ticket" class="${styles['winner-icon']}">
                <h4>Last Draw Winners</h4>
                <hr>
                <p>Mwehehehe</p>
            </div>
        </div>
    </div>

    <!-- Modal Part (Log in | Sign Up) -->
    <div class="${styles['modal']}" id="authModal">
        <span class="${styles['close-btn']}" id="closeModalBtn">&times;</span> 
        <div class="${styles['modal-content']}">
            <div class="${styles['container']}">
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form>
                            <h1>Sign Up</h1>
                            <input type="text" placeholder="Name" id="name-signup"/>
                            <input type="email" placeholder="Email" id="email-signup"/>
                            <input type="password" placeholder="Password" id="password-signup"/>
                            <button class="${styles['ghost1']}" id="signup-btn">Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form>
                            <h1>Log in</h1>
                            <input type="test" placeholder="Username" id="username-login"/>
                            <input type="password" placeholder="Password" id="pass-login"/>
                            <button class="${styles['ghost1']}" id="login-btn">Log In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1 class="${styles['header-overlay']}">Welcome Back!</h1>
                                <p class="${styles['auth-p']}">Enter your personal details<br>and let your lucky journey start here!</p>
                                <button class="${styles['ghost']}" id="signIn">Log In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1 class="${styles['header-overlay']}">Join with us</h1>
                                <p class="${styles['auth-p']}">Get ready for fortune, start your journey with us today!</p>
                                <button class="${styles['ghost']}" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
}

