// Edit Profile Modal
const modal = document.getElementById("editModal");
const editBtn = document.querySelector(".edit-btn");
const closeBtn = document.querySelector(".close-btn");
const saveBtn = document.getElementById("saveBtn");
const nameInput = document.getElementById("newName");

saveBtn.disabled = true;
saveBtn.classList.remove("enabled");

editBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

function closeModal() {
    modal.style.display = "none";
}

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

document.getElementById('cash-in-btn').addEventListener('click', function() {
    window.location.href = 'cashIn.html'; 
});


