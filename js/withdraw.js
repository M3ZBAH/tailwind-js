//step-1: add event handler to the deposit button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2: get the withdraw ammount from deposit input field
    //use .value to get the inside value from input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //step:3 get the current withdraw total ammount
    //for non input elemnt do not use .value, use .innertext
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-4: adding new withdraw to previous withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-5: get balance and covert string to number
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7:clear the deposit field
    withdrawField.value = '';
})