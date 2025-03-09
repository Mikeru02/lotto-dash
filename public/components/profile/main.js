// Main to ng profile page

import styles from "./component.module.css";

export default function Main(root) {
  root.innerHTML = `
    <!-- Lagay mo here lahat ng elements mo sa main -->
    <div class="${styles['main-container']}">

        <!-- Left Section (20%) -->
        <div class="${styles['left-section']}">
            <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740931230/image-removebg-preview_8_vjfdkm.png" alt="Logo" class="${styles['logo']}">
        </div>

        <!-- Center Content Section (60%) -->
        <div class="${styles['center-section']}">
            <main class="${styles['content']}">
                <!-- Profile Section -->
                <div class="${styles['profile']}">
                    <div class="${styles['cover-photo']}"></div>
                    <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740663929/ppp_tdpbik.jpg" alt="Profile" class="${styles['avatar']}">
                    <h2 class="${styles['name']}">Hatdog Cheesedog</h2>
                    <button class="${styles['edit-btn']}">Edit Profile</button>
                </div>                

                <div class="${styles['wallet']}">
                    <p class="${styles['wallet-title']}">Wallet Balance</p>
                    <p class="${styles['wallet-amount']}">₱ 500.00</p>
                    <div class="${styles['wallet-actions']}">
                        <button class="${styles['wallet-btn']}" id="cash-in-btn">Cash In</button>
                        <span>|</span>
                        <button class="${styles['wallet-btn']}" id="withdraw-btn">Withdraw</button>
                    </div>
                </div>

                <div class="${styles['section']}">
                    <h3>Winning History</h3>
                    <p class="${styles['no-wins']}">No wins yet</p>
                </div>

                <!-- Play History -->
                <div class="${styles['section']}">
                    <h3>Play History</h3>
                    <div class="${styles['history-card']}">
                        <p>Ticket Details: Draw Date & Time</p>
                        <p>Winning Numbers: --</p>
                        <p>Selected Numbers: --</p>
                        <p>Match Status: Matched 3 out of 6</p>
                    </div>
                </div>
            </main>
        </div>

        <!-- Right Empty Section (20%) -->
        <div class="right-section"></div>

    </div>
  `;

  // If need mo ng css sa mismong main, uncomment mo yung next line
  // root.className = styles['main'];
}
