// If need mo ng styles here kindly uncomment this 
// import styles from "./component.module.css";
import getBalance from "../../utils/getBalance";
import updateBalance from "../../utils/updateBalance";

export default async function Events() {
  // Lagay mo her eyung events mo sa profile page
  let walletBalance = await getBalance();
  // Edit Profile Modal
  const modal = document.getElementById("editModal");
  const editBtn = document.querySelector(".edit-btn");
  const closeBtn = document.querySelector(".close-btn");
  const saveBtn = document.getElementById("saveBtn");
  const nameInput = document.getElementById("newName");
  const backBtn = document.getElementById("backhome-btn");
  const walletBalanceSpan = document.getElementById("walletbalance");

  document.querySelectorAll(".amount").forEach((div) => {
    div.addEventListener("click", async function() {
        await updateBalance(div.getAttribute("data-val"));
        depositModal.style.display = "none"

        let updatedbalance = await getBalance();
        walletBalanceSpan.innerHTML = updatedbalance;
    })
  })
  walletBalanceSpan.innerHTML = walletBalance;

  backBtn.addEventListener("click", function() {
    window.app.pushRoute("/home");
  })

  saveBtn.disabled = true;
  saveBtn.classList.remove("enabled");

  editBtn.addEventListener("click", () => {
      modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  })

  nameInput.addEventListener("input", () => {
      if (nameInput.value.trim() !== "") {
          saveBtn.disabled = false;
          saveBtn.classList.add("enabled");
      } else {
          saveBtn.disabled = true;
          saveBtn.classList.remove("enabled");
      }
  });

  saveBtn.addEventListener("click", () => {
      if (nameInput.value.trim() !== "") {
          alert("Changes saved!");
          closeModal();
      }
  });


  // Withdraw Modal
  const withdrawModal = document.getElementById('withdraw-modal');
  const withdrawBtn = document.getElementById('withdraw-btn');
  const closeWithdrawModal = document.getElementById('close-withdraw-modal');
  const withdrawActionBtn = document.getElementById('withdraw-action-btn');

  document.getElementById('withdraw-btn').addEventListener('click', function() {
      withdrawModal.style.display = 'flex';
  });

  closeWithdrawModal.addEventListener('click', function() {
      withdrawModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === withdrawModal) {
          withdrawModal.style.display = 'none';
      }
  });

  withdrawActionBtn.addEventListener('click', function() {
      withdrawModal.style.display = 'none';

      document.getElementById('withdraw-amount-input').value = ''; 


      console.log('Withdrawal action has been processed!');
  });

  const depositModal = document.getElementById("deposit-modal");
  const closeDepositModal = document.getElementById("close-deposit-modal");

  document.getElementById('cash-in-btn').addEventListener('click', function() {
    depositModal.style.display = 'flex';
  });

  closeDepositModal.addEventListener("click", function() {
    depositModal.style.display = 'none';
  })

}
