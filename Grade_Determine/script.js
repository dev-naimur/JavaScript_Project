

function clickButton(){
  const input = document.getElementById("num").value
  

  const num = Number(input);
 

  if(input.trim() === ""){
    document.getElementById("result").innerText="Please Enter Number";
    return;
  }else if(num >= 80 && num <=100){
      result = num + " (Your Grade Is A+) ";
  }else if(num >= 70 && num < 80){
      result = num + " (Your Grade Is A) ";
  }else if(num >= 60 && num < 70){
    result = num + " (Your Grade Is A-) ";
  }else if(num >= 50 && num < 60){
    result = num + " (Your Grade Is B+) ";
  }else if(num >= 40 && num < 50){
    result = num + " (Your Grade Is C ) ";
  }else if(num >= 33 && num < 40){
    result = num + " (Your Are Passed) ";
  }else{
    result = num+ " (You Are Fail)";
  }

  document.getElementById("num").value="";
  
  document.getElementById("result").innerText= "Result : " + result;
}