//  add event handler with withdraw btn

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField= document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

   // clear the withdraw field value 
   withdrawField.value = '';

    if (isNAN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }
    

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

 

    if(newWithdrawAmount> previousBalanceTotal){
        alert('You do not have suficient amount');
        return;
    }


    const currentWithdrawTotal =  previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;


    
    const currentBalanceTotal  = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText= currentBalanceTotal;

     
})