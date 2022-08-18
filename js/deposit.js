//step-1: add event handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2: get the deposit ammount from deposit input field
    //use .value to get the inside value from input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step:3 get the current deposit total ammount
    //for non input elemnt do not use .value, use .innertext
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4: adding new deposite to previous deposite
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step-5: get balance and covert string to number
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7:clear the deposit field
    depositField.value = '';
})