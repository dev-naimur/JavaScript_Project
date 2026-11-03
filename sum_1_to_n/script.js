

function clickButton(){
  const input = document.getElementById("num").value
  

  const num = Number(input);
  let result = 0;

  if(input.trim() === ""){
    document.getElementById("result").innerText="Please Enter Number";
    return;
  }else{""}
  for(let i=1; i <= num; i++){
    result = result +i;
  }
  
  document.getElementById("num").value="";
  
  document.getElementById("result").innerText= "Result : " + result;
}