

function clickButton(){
  const input = document.getElementById("num").value
  

  const num = Number(input);
 

  if(input.trim() === ""){
    document.getElementById("result").innerText="Please Enter Number";
    return;
  }else if(num > 0){
      result = num + " Is The Positive Number";
  }else if(num < 0){
      result = num + " Is The Negative Number";
  }else{
    result = num + " Zero";
  }

  document.getElementById("num").value="";
  
  document.getElementById("result").innerText= "Result : " + result;
}