// Back Arrow Button

document.querySelector('.back-button').addEventListener('click', function() {
    window.history.back(); 
});


// Modal Cash In
function submitCashIn() {
    closeModal();
}

function openModal() {
    const amountInput = document.querySelector('.amount-input');
    const selectedAmount = amountInput.value || 0; 

    const formattedAmount = formatAmount(parseFloat(selectedAmount));

    const cashAmount = document.getElementById('cashAmount');
    cashAmount.textContent = formattedAmount; 

    const modal = document.getElementById('cashInModal');
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('cashInModal');
    modal.style.display = "none";
}

function formatAmount(amount) {
    return '₱' + amount.toLocaleString('en-PH') + '.00';
}

function submitCashIn() {
    closeModal();
}

