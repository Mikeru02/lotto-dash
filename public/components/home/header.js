// Header to ng home page

import styles from "./home.module.css";

export default function Header(root) {
  root.innerHTML = `
    <!-- Lagay mo here yung elements mo sa header -->
     <div class="header">
        <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740931230/image-removebg-preview_8_vjfdkm.png" alt="Logo" class="logo"> 
        <div class="profile-container">
            <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740663929/ppp_tdpbik.jpg" alt="Profile" class="profile"> 
        </div>
    </div>

    <div class="last-winning-draw">
        <div class="number-box">09</div>
        <div class="number-box">22</div>
        <div class="number-box">03</div>
        <div class="number-box">07</div>
        <div class="number-box">02</div>
        <div class="number-box">04</div>
    </div>
    <p class="next-draw">Next Draw: <span id="countdown"></span></p>
  `;
  
  // If need mo ng css sa mismong header, uncomment mo yung next line 
   root.className = styles['header'];
}

