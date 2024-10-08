document.getElementById('btn-noakhali-donate').addEventListener('click', function () {
    
 
    // donate for nokhali operation 
    const mainAccountBalance = getTextFieldValueById('main-account-balance');

    const donateAmount = getInputFieldValueById('donate-amount');
    const fundAmount = getTextFieldValueById('current-amount');
    
     if(donateAmount<=0)
     {
        
        alert('Insufficient Funding')
        document.getElementById('my_modal_1').close()
        return;
        
        
     }
     if(donateAmount>mainAccountBalance)
        {
            alert('Insufficient Funding')
            document.getElementById('my_modal_1').close()
            return;
        }

    if (!isNaN(donateAmount)) {
        
        
        const newBalanceInFund = fundAmount + donateAmount;
        
        document.getElementById('current-amount').innerText = newBalanceInFund;
        
        
        const newMainAccountBalance = mainAccountBalance - donateAmount;
        
        document.getElementById('main-account-balance').innerText = newMainAccountBalance;
        // transaction history
        const div = document.createElement('div');
        div.classList.add('rounded-lg')
        div.classList.add('border-2')
        div.classList.add('pl-5','py-5','mb-2')
        div.innerHTML = `<h4 class="font-semibold">${donateAmount} Taka is Donated for famine-2024 at Noakhali,Bangladesh</h4>
        <p>${new Date()}</p>`;
        document.getElementById('history-show').appendChild(div);
        //history end here
        
        
       
        document.getElementById('donate-amount').value='';
       
        

    }
    else {
        alert('Failed to donate please try again! type amount correctly');
        document.getElementById('my_modal_1').close();
    }
    





})
// card-2
document.getElementById('btn-feni-donate').addEventListener('click', function () {
    // donate for Feni
    const mainAccountBalance2 = getTextFieldValueById('main-account-balance');
    const donateAmount2 = getInputFieldValueById('donate-amount2');
    const fundAmount2 = getTextFieldValueById('current-amount2');
    if(donateAmount2<=0)
        {
           alert('Insufficient Funding')
           document.getElementById('my_modal_2').close();
           return;
        }
        if(donateAmount2>mainAccountBalance2)
           {
               alert('Insufficient Funding')
               document.getElementById('my_modal_2').close();
               return;
           }
    if (!isNaN(donateAmount2)) {
        const newBalanceInFund2 = fundAmount2 + donateAmount2;
        document.getElementById('current-amount2').innerText = newBalanceInFund2;
       
        const newMainAccountBalance2 = mainAccountBalance2 - donateAmount2;
        document.getElementById('main-account-balance').innerText = newMainAccountBalance2;
        //history start
        const div1 = document.createElement('div');
        div1.classList.add('rounded-lg')
        div1.classList.add('border-2')
        div1.classList.add('pl-5','py-5','mb-2')
        div1.innerHTML = `<h4 class="font-semibold">${donateAmount2} Taka is Donated for Food Relief in Feni,Bangladesh</h4>
        <p>${new Date()}</p>`;
        document.getElementById('history-show').appendChild(div1);
        //history end
        document.getElementById('donate-amount').value='';

    }
    else {
        alert('Failed to donate please try again! type amount correctly')
        document.getElementById('my_modal_2').close();
    }


 })
//card-3
document.getElementById('btn-quota-donate').addEventListener('click', function () {
    // donate for Quota

    const mainAccountBalance3 = getTextFieldValueById('main-account-balance');
    const donateAmount3 = getInputFieldValueById('donate-amount3');
    const fundAmount3 = getTextFieldValueById('current-amount3');
    if(donateAmount3<=0)
        {
           alert('Insufficient Funding')
           document.getElementById('my_modal_3').close();
           return;
        }
        if(donateAmount3>mainAccountBalance3)
           {
               alert('Insufficient Funding')
               document.getElementById('my_modal_3').close();
               return;
           }
    if (!isNaN(donateAmount3)) {
        const newBalanceInFund3 = fundAmount3 + donateAmount3;
        document.getElementById('current-amount3').innerText = newBalanceInFund3;
        
        const newMainAccountBalance3 = mainAccountBalance3 - donateAmount3;
        document.getElementById('main-account-balance').innerText = newMainAccountBalance3;
        //history start
        const div2 = document.createElement('div');
        div2.classList.add('rounded-lg')
        div2.classList.add('border-2')
        div2.classList.add('pl-5','py-5','mb-2')
        div2.innerHTML = `<h4 class="font-semibold">${donateAmount3} Taka is Donated for Aid for Injured in Quota Movement,Bangladesh</h4>
        <p>${new Date()}</p>`;
        document.getElementById('history-show').appendChild(div2);
        //history end
        
        document.getElementById('donate-amount').value='';

    }
    else{
        alert('failed to donate please try again!type amount correctly')
        document.getElementById('my_modal_3').close();
    }


})