// button swiping feature
const historyTab =document.getElementById('history-show-btn');
const donationTab =document.getElementById('donation-form-btn');
historyTab.addEventListener('click',function(){
    historyTab.classList.add('bg-lime-400');
    historyTab.classList.remove('bg-gray-400')
    donationTab.classList.remove('bg-lime-400');
    donationTab.classList.add('bg-gray-400');
    document.getElementById('donate-form-show').classList.add('hidden');
    document.getElementById('history-show').classList.remove('hidden');
    
})
donationTab.addEventListener('click',function(){
    historyTab.classList.remove('bg-lime-400');
    historyTab.classList.add('bg-gray-400')
    donationTab.classList.add('bg-lime-400');
    donationTab.classList.remove('bg-gray-400');
    document.getElementById('donate-form-show').classList.remove('hidden');
    document.getElementById('history-show').classList.add('hidden');
    
})