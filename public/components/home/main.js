// Main to ng home page

import styles from "./home.module.css";

export default function Main(root) {
  root.innerHTML = `
    <!-- Lagay mo here lahat ng elements mo sa main -->
    <div class="main-content">
        <div class="contents">
            <h3>Numbers</h3>
            <div class="number-selection">
                <div class="empty" onclick="openModal(0)"></div>
                <div class="empty" onclick="openModal(1)"></div>
                <div class="empty" onclick="openModal(2)"></div>
                <div class="empty" onclick="openModal(3)"></div>
                <div class="empty" onclick="openModal(4)"></div>
                <div class="empty" onclick="openModal(5)"></div>
            </div>
            
            <div class="buttons">
                <button class="reset-btn" onclick="resetSelection()"></button>
                <button class="submit-btn" onclick="submitSelection()"></button>
            </div>
            
            <h3>Players</h3>
            <div class="players-winners-container">
                <div class="players">
                    <div class="player">
                        <div class="player-name">Hatdog Cheesedog</div>
                    </div>
                    <div class="player">
                        <div class="player-name">Jillian Cutie</div>
                    </div>
                    <div class="player">
                        <div class="player-name">Mwehehehe</div>
                    </div>
                </div>

                <div class="winners">
                    <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740659836/Screenshot_2025-02-27_203626-removebg-preview_mose29.png" alt="Winning Ticket" class="winner-icon">
                    <h4>Last Draw Winners</h4>
                    <hr>
                    <p>Mwehehehe</p>
                </div>
            </div>
            
            </div>
        </div>
        
        <!-- Modal -->
        <div id="numberModal" class="modal" style="display:none;">
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1741191966/lucky_zqryhr.png" alt="win" class="win-logo"> 
                <h3>Select a Number</h3>
                <input type="number" id="lottoNumber" min="1" max="45" placeholder="Enter number (1-45)">
                <button class="cancel-btn" onclick="closeModal()">CANCEL</button>
                <button class="save-btn" onclick="saveNumber()">SAVE</button>           
            </div>
    </div>
  `;

  // If need mo ng css sa mismong main, uncomment mo yung next line
   root.className = styles['main'];
}
