document.getElementById('donation-form-btn').addEventListener('click',function(){
    getShowFormById('donate-form-show')
   
})
document.getElementById('history-show-btn').addEventListener('click',function(){
    getShowFormById('history-show')
    
})
//operation
const colorBtn1 = document.getElementById('donation-form-btn');
colorBtn1.addEventListener('click',function(){
    if(colorBtn1.classList.contains('bg-lime-400')){
        colorBtn1.classList.remove('bg-lime-400')
        colorBtn1.classList.add('bg-gray-400')
    }
    else{
        colorBtn1.classList.remove('bg-gray-400')
        colorBtn1.classList.add('bg-lime-400')
    }
})
//
const colorBtn2 = document.getElementById('history-show-btn');
colorBtn1.addEventListener('click',function(){
    if(colorBtn2.classList.contains('bg-gray-400')){
        colorBtn2.classList.remove('bg-gray-400')
        colorBtn2.classList.add('bg-lime-400')
    }
    else{
        colorBtn2.classList.remove('bg-lime-400')
        colorBtn2.classList.add('bg-gray-400')
    }
})