//function for get input Field value
function getInputFieldValueById(id){
   let inputValue = document.getElementById(id).value;
   let inputNumber = parseFloat(inputValue);
     document.getElementById(id).value='';
   
    return inputNumber;

}
// function to get text value.
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textInNumber = parseFloat(textValue)
    return textInNumber;
}
// Show and Hide form
function getShowFormById(id){
    document.getElementById('donate-form-show').classList.add('hidden');
    document.getElementById('history-show').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
    
}
// 
