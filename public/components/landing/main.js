// main.js

import styles from "./component.module.css";

// Function to handle rendering the HTML structure
export default function Main(root) {
  root.innerHTML = `
    <div class="${styles['main-content']}">
        <div class="${styles['contents']}">
            <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1741104136/Blue_and_Black_Simple_Coming_Soon_Banner_1_n0w5us.jpg" alt="Banner" class="${styles['banner']}">
            <h4 class="${styles['last-winning-draw']}">Last Winning Draw</h4>
            <hr>
            <div class="last-winning-draw">
                <div class="${styles['number-box']}">09</div>
                <div class="${styles['number-box']}">22</div>
                <div class="${styles['number-box']}">03</div>
                <div class="${styles['number-box']}">07</div>
                <div class="${styles['number-box']}">02</div>
                <div class="${styles['number-box']}">04</div>
            </div>
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
                        <form action="#">
                            <h1>Sign Up</h1>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button class="${styles['ghost1']}">Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="#">
                            <h1>Log in</h1>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button class="${styles['ghost1']}">Log In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details<br>and let your lucky journey start here!</p>
                                <button class="${styles['ghost']}" id="signIn">Log In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Join with us</h1>
                                <p>Get ready for fortune, start your journey with us today!</p>
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

