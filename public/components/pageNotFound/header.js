// Header to ng page not found

import styles from "./pageNotFound.module.css";
import '/styles/common.css';  


export default function Header(root) {
  root.innerHTML = `
    <!-- Lagay mo here yung elements mo sa header -->
    <div class="${styles.header}">
        <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740931230/image-removebg-preview_8_vjfdkm.png" alt="Logo" class="${styles.logo}"> 
    </div>
  `;
  
  // If need mo ng css sa mismong header, uncomment mo yung next line 
  //root.className = styles['header'];
}

