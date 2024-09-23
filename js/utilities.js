//function for get input Field value
function getInputFieldValueById(id){
   const inputValue = document.getElementById(id).value;
   const inputNumber = parseFloat(inputValue);
    return inputNumber;

}
// function to get text value.
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textInNumber = parseFloat(textValue)
    return textInNumber;
}