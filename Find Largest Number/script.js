

function clickButton(){
  const input1 = document.getElementById("num1").value
  const input2 = document.getElementById("num2").value
  const input3 = document.getElementById("num3").value

  const num1 = Number(input1);
  const num2 = Number(input2);
  const num3 = Number(input3);

  if(input1.trim() === "" || input2.trim() === "" || input3.trim() === ""){
    document.getElementById("result").innerText="Please Enter all Three Number";
    return;
  }else if(num1 >= num2 && num1 >= num3){
      result = num1 + " Is The Largest Number";
  }else if(num2 >= num1 && num2 >= num3){
      result = num2 + " Is The Largest Number";
  }else{
    result = num3 + " Is the Largest Number";
  }

  ["num1","num2","num3"].forEach(id =>{
    document.getElementById(id).value="";
  })
  document.getElementById("result").innerText= "Result : " + result;
}