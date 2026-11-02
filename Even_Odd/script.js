

function clickButton(){
  const input = document.getElementById("num").value;

  if(input.trim() === ""){
    document.getElementById("result").innerText="Please Enter a Number";
    return;
  }

  const num = Number(input);
 
    if(num % 2 === 0){
     result = "Even Number";
    } else{
     result = "ODD Number";
}
    document.getElementById("num").value="";
    document.getElementById("result").innerText="Result :"+result;
}