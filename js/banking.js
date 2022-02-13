// deposit button handaler 
document.getElementById('deposit-button').addEventListener('click', function () {

    const deposited = document.getElementById('deposit-input');

    const enteredAmountText = deposited.value;
    const enteredAmount = parseFloat(enteredAmountText);
    // deposit added 
    const totalAmount = document.getElementById('total-deposit');
    const previousAmoutText = totalAmount.innerText;
    const previousAmout = parseFloat(previousAmoutText);
    totalAmount.innerText = previousAmout + enteredAmount;

    // account balance updated with deposited amount 
    const AccountBalance = document.getElementById('total-balance');
    const previousAccountBalanceText = AccountBalance.innerText;
    const previousAccountTotalBalance = parseFloat(previousAccountBalanceText);
    AccountBalance.innerText = previousAccountTotalBalance + enteredAmount;
    // clearing deposit input option 
    deposited.value = '';
});

// withdraw amount handler and reduicing money from account balance 
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const newWithdraw = document.getElementById('withdraw-input');
    const withdrawAmountText = newWithdraw.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // display withdraw ammount on withdraw bar 
    const previousWithdrawTotal = document.getElementById('total-Withdraw');
    const previousWithdrawText = previousWithdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    previousWithdrawTotal.innerText = newWithdrawAmount + previousWithdrawAmount;

    // reducing money from Account Balance for withdrawing money
    const AccountBalance = document.getElementById('total-balance');
    const previousAccountBalanceText = AccountBalance.innerText;
    const previousAccountTotalBalance = parseFloat(previousAccountBalanceText);
    AccountBalance.innerText = previousAccountTotalBalance - newWithdrawAmount;
    // clearing withdraw input space 
    newWithdraw.value = '';
});