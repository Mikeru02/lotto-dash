// Main to ng start page

import styles from "./component.module.css";

export default function Main(root) {
  root.innerHTML = `
    <div class="${styles['container']}">
      <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740928683/DALL_E_2025-03-02_01.09.35_-_A_high-energy_and_modern_logo_for_Lotto_Dash_an_online_lottery_platform._The_design_should_feature_sleek_futuristic_typography_with_a_motion_effec_zqtv9e.png" alt="Lotto Logo" class="${styles['logo']}">
      <button class="${styles['play-button']}" id="play-btn">Play Now!</button>
    </div>
  `;

  // If need mo ng css sa mismong main, uncomment mo yung next line
  root.className = styles['main'];
}
