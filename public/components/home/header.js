// Header to ng home page

import styles from "./component.module.css";

export default function Header(root) {
  root.innerHTML = `
    <!-- Lagay mo here yung elements mo sa header -->
     <div class="${styles['inner-header']}">
        <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740931230/image-removebg-preview_8_vjfdkm.png" alt="Logo" class="${styles['logo']}"> 
        <div class="${styles['profile-container']}">
          <div id="wallet-balance">
            <p>\u20B1 <span id="balance"></span></p>
          </div>
          <a id="profile-btn">
            <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740663929/ppp_tdpbik.jpg" alt="Profile" class="${styles['profile']}"> 
          </a>
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
  //root.className = styles['header'];
}

