
function calculate(operator) {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    let result;
    if(
        document.getElementById('num1').value === '' ||
        document.getElementById('num2').value === ''

){
    document.getElementById('result').innerText = "Please Enter both numbers !";
    return;
}

if(operator == '+'){
    result = num1 + num2;
}else if(operator == '-'){
    result = num1 - num2;
}else if(operator == '*'){
    result = num1 * num2;
}else if(operator == '/'){
    if(num2 == 0){
        result = 'Cannot divide by zero';
    }else{
        result = num1 / num2;
    }
}
document.getElementById('result').innerText = "Result :"+result;


}

 