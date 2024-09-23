document.getElementById('btn-noakhali-donate').addEventListener('click',function(){
    
    // donate for nokhali operation 
    
    
    const donateAmount = getInputFieldValueById('donate-amount');
    const fundAmount = getTextFieldValueById('current-amount');
    const newBalanceInFund = fundAmount+donateAmount;
    document.getElementById('current-amount').innerText= newBalanceInFund;
    const mainAccountBalance = getTextFieldValueById('main-account-balance');
    const newMainAccountBalance = mainAccountBalance - donateAmount;
    document.getElementById('main-account-balance').innerText= newMainAccountBalance;
    

})
// card-2
document.getElementById('btn-feni-donate').addEventListener('click',function(){
    // donate for Feni
    const donateAmount2 = getInputFieldValueById('donate-amount2');
    const fundAmount2 = getTextFieldValueById('current-amount2');
    const newBalanceInFund2 = fundAmount2+donateAmount2;
    document.getElementById('current-amount2').innerText= newBalanceInFund2;
    const mainAccountBalance2 = getTextFieldValueById('main-account-balance');
    const newMainAccountBalance2 = mainAccountBalance2 - donateAmount2;
    document.getElementById('main-account-balance').innerText= newMainAccountBalance2;

})
//card-3
document.getElementById('btn-quota-donate').addEventListener('click',function(){
    // donate for Feni
    const donateAmount3 = getInputFieldValueById('donate-amount3');
    const fundAmount3 = getTextFieldValueById('current-amount3');
    const newBalanceInFund3 = fundAmount3+donateAmount3;
    document.getElementById('current-amount3').innerText= newBalanceInFund3;
    const mainAccountBalance3 = getTextFieldValueById('main-account-balance');
    const newMainAccountBalance3 = mainAccountBalance3 - donateAmount3;
    document.getElementById('main-account-balance').innerText= newMainAccountBalance3;

})