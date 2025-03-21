// Main to ng profile page
import Home from "../../icons/home.svg";
import Logout from "../../icons/logout.svg";
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
                    <div class="${styles['img-action-btn']}">
                        <img src=${Home} class="${styles['img-btn']}" id="home-btn">
                        <img src=${Logout} class="${styles['img-btn']}" id="logout-btn">

                    </div>
                    <div>
                    <h2 class="${styles['name']}" id="fullname"></h2>
                    <h3 class="${styles['name']}" id="username"></h3>
                    </div>
                    <button class="${styles['edit-btn']} edit-btn">Edit Profile</button>

                </div>                

                <div class="${styles['wallet']}">
                    <p class="${styles['wallet-title']}">Wallet Balance</p>
                    <p class="${styles['wallet-amount']}">₱ <span id="walletbalance"></span></p>
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
                    <div id="bet-history">
                    </div>
                </div>
            </main>
        </div>

        <!-- Right Empty Section (20%) -->
        <div class="${styles['right-section']}"></div>

    </div>

    <div id="editModal" class="${styles['modal']}">
        <div class="${styles['modal-content']}">
            <span class="${styles['close-btn']} close-btn" >&times;</span>
            <h2>Edit Profile</h2>
            <div class="${styles['modal-body']}">
                <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740663929/ppp_tdpbik.jpg" alt="Profile" class="${styles['avatar']}">
                <button class="${styles['change-photo-btn']}">Change Photo</button>
                <div>
                    <label for="newName">New Name:</label>
                    <input type="text" id="newName" name="newName" placeholder="Enter new name">
                </div>
                <button class="${styles['cancel-btn']}" onclick="closeModal()">Cancel</button>
                <button id="saveBtn" class="${styles['save-btn']}" disabled>Save Changes</button>
            </div>
        </div>
    </div>

    <div class="${styles['modal']}" id="withdraw-modal">
        <div class="${styles['modal-content']}">
            <span class="${styles['close-btn']}" id="close-withdraw-modal">&times;</span>
            <h2>Withdraw</h2>
            <div class="${styles['modal-body']}">
                <h3>Wallet Balance: ₱<span id="wallet-balance"></span></h3>
                <input type="number" id="amount-withdraw" name="#" placeholder="Enter Amount" min="100">
                <button id="withdraw-action-btn" class="${styles['withdraw-btn']}">Withdraw</button>
            </div>
        </div>
    </div>

    <div class="${styles['modal']}" id="deposit-modal">
        <div class="${styles['modal-content']}">
            <span class="${styles['close-btn']}" id="close-deposit-modal">&times;</span>
            <h2>Cash In</h2>
            <hr>
            <div class="${styles['modal-body']}">
                <div class="${styles['amount-options']}">
                        <div class="${styles['amount-row']}">
                            <button class="${styles['amount-box']} amount" data-val=20>20</button>
                            <button class="${styles['amount-box']} amount" data-val=50>50</button>
                            <button class="${styles['amount-box']} amount" data-val=80>80</button>
                        </div>
                        <div class="${styles['amount-row']}">
                            <button class="${styles['amount-box']} amount" data-val=100>100</button>
                            <button class="${styles['amount-box']} amount" data-val=200>200</button>
                            <button class="${styles['amount-box']} amount" data-val=500>500</button>
                        </div>
                    </div>

                    <div class="${styles['separator']}">
                        <hr>
                        <span>OR</span>
                        <hr>
                    </div>

                    <div class="${styles['custom-amount']}">
                        <p>Enter Amount</p>
                        <input type="number" id="custom-amount" class="amount-input" placeholder="Enter Amount" min="1">
                    </div>

                    <div class="${styles['submit-container']}">
                        <button class="${styles['submit-btn']}" id="custom-amount-btn">SUBMIT</button>
                    </div>
            </div>
        </div>
    </div>
  `;

  // If need mo ng css sa mismong main, uncomment mo yung next line
  // root.className = styles['main'];
}
