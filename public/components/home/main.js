// Main to ng home page

import styles from "./component.module.css";

export default function Main(root) {
  root.innerHTML = `
    <!-- Lagay mo here lahat ng elements mo sa main -->
    <div class="${styles['main-content']}">
        <div class="${styles['contents']}">
            <h3>Numbers</h3>
            <div class="${styles['number-selection']} number-selection">
                <div class="${styles['empty']} input-num" data-index="0"></div>
                <div class="${styles['empty']} input-num" data-index="1"></div>
                <div class="${styles['empty']} input-num" data-index="2"></div>
                <div class="${styles['empty']} input-num" data-index="3"></div>
                <div class="${styles['empty']} input-num" data-index="4"></div>
                <div class="${styles['empty']} input-num" data-index="5"></div>
            </div>
            
            <div class="${styles['buttons']}">
                <button class="${styles['reset-btn']}" id="reset-selection"></button>
                <button class="${styles['submit-btn']}" id="submit-selection"></button>
            </div>
            
            <h3 class="${styles['h3_player']}">Players</h3>
            <div class="${styles['players-winners-container']}">
                <div class="${styles['players']}" id="players-container">
                </div>

                <div class="${styles['winners']}">
                    <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740659836/Screenshot_2025-02-27_203626-removebg-preview_mose29.png" alt="Winning Ticket" class="${styles['winner-icon']}">
                    <h4>Last Draw Winners</h4>
                    <hr>
                    <div id="winners"></div>
                </div>
            </div>
            
            </div>
        </div>
        
        <!-- Modal -->
        <div id="numberModal" class="${styles['modal']}">
            <div class="${styles['modal-content']}">
                <div class="${styles['modal-inner']}">
                    <span class="${styles['close']}" id="close-btn">&times;</span>
                    <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1741191966/lucky_zqryhr.png" alt="win" class="${styles['win-logo']}"> 
                    <h3>Select a Number</h3>
                    <input type="number" id="lottoNumber" min="1" max="45" placeholder="Enter number (1-45)" disabled>
                    <div id="number-btn" class="${styles['number-btn']}"></div>
                    <div class="${styles['btns']}">
                        <button class="${styles['cancel-btn']}" id="cancel">CANCEL</button>
                        <button class="${styles['save-btn']}" id="save">SAVE</button>
                    </div>  
                </div>         
            </div>
    </div>
  `;

  // If need mo ng css sa mismong main, uncomment mo yung next line
   root.className = styles['main'];
}
