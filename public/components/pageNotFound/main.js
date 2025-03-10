// Main to ng page not found

// import styles from "./pageNotFound.module.css"; 
//import '/styles/common.css';


export default function Main(root) {
  root.innerHTML = `
    <div class="${styles.container}">
        <img 
          src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1740714408/image-removebg-preview_7_asuvp0.png" 
          alt="Image" 
          class="${styles.dino}"
        >
        <p class="${styles.oops}">Oops! The page you’re looking for doesn’t exist.</p>
        <button class="${styles.button}">Go Back</button>
    </div>
  `;

  root.querySelector(`.${styles.button}`).addEventListener("click", () => {
    window.history.back();
  });


  // If need mo ng css sa mismong main, uncomment mo yung next line
  // root.className = styles['main'];
}
