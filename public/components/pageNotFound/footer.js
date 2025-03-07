// Footer to ng page not found

import styles from "./pageNotFound.module.css";
import '/styles/common.css';


export default function Footer(root) {
  root.innerHTML = `
    <!-- Lagay mo here lahat ng elements for footer -->
    <div class="${styles.footer}">
        <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1741104321/Screenshot_2025-03-05_000458_usyza2.png" alt="barcode" class="${styles.barcode}"> 
        <p>Ellorando, Rodien Jillian | Ponce, Michael Alexis</p>
        <p>For educational purposes only | BSCS 3</p>
        <p>All Rights Reserved 2025</p>
    </div>
  `;

  // If may design ka sa footer uncomment mo yung next line 
  //root.className = styles['footer'];

}
