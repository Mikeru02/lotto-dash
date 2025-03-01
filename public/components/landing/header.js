import styles from "./component.module.css";

export default function Header(root){
  root.innerHTML = `
    <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740572539/image-removebg-preview_2_crxbfh.png" alt="Logo" class="logo">
    <div class="profile-container">
      <img src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740663929/ppp_tdpbik.jpg" alt="Profile" class="profile"> 
    </div>

  `;

  root.className = styles['header']
}
