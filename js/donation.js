document.getElementById('btn-noakhali-donate').addEventListener('click',function(){
    
    // donate for nokhali operation 
    const donatedAmount = getInputFieldValueById('donate-amount');
    const fundAmount = getTextFieldValueById('current-amount');
    const newBalanceInFund = fundAmount+donatedAmount;
    document.getElementById('current-amount').innerText= newBalanceInFund;
    const mainAccountBalance = getTextFieldValueById('main-account-balance');
    const newMainAccountBalance = mainAccountBalance - donatedAmount;
    document.getElementById('main-account-balance').innerText= newMainAccountBalance;
    

})