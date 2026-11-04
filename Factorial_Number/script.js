

function clickButton(){
  const input = document.getElementById("num").value
  

  const num = Number(input);
  let result = 1;

  if(input.trim() === ""){
    document.getElementById("result").innerText="Please Enter Number";
    return;
  }else{""}
   if (num < 0 || !Number.isInteger(num)) {
        document.getElementById("result").innerText = "Please Enter a Positive Integer";
        return;
    }
  for(let i=1; i <= num; i++){
    result *= i;
  }
  
  document.getElementById("num").value="";
  
  document.getElementById("result").innerText= `Factorial of ${num} = ${result}`;
}