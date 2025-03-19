// Header to ng landing page

// import '/styles/common.css';
import styles from "./component.module.css";

export default function Header(root) {
  root.innerHTML = `
    <!-- Lagay mo here yung elements mo sa header -->
    <div class="${styles['inner-header']}">
        <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740931230/image-removebg-preview_8_vjfdkm.png" alt="Logo" class="${styles['logo']}"> 
        <div class="${styles['auth-buttons']}">
            <button id="openModalBtn" class="${styles['login-btn']}">Log In | Sign Up</button>
        </div>
    </div>

    <div class="${styles['last-winning-draw']}" id="draw-container">
        <div class="${styles['number-box']}">09</div>
        <div class="${styles['number-box']}">22</div>
        <div class="${styles['number-box']}">03</div>
        <div class="${styles['number-box']}">07</div>
        <div class="${styles['number-box']}">02</div>
        <div class="${styles['number-box']}">04</div>
    </div>
    <p class="${styles['jackpot-container']}"> Jackpot: <span class="${styles['jackpot']}" id="jackpot"></span></p>
    <p class="${styles['next-draw']}">Next Draw: <span class="${styles['countdown']}" id="countdown"></span></p>
  `;
  
  // If need mo ng css sa mismong header, uncomment mo yung next line 
  // root.className = styles['header'];
}
