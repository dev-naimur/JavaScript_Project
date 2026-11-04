

function clickButton(){
  const input = document.getElementById("num").value
  

  const num = Number(input);
  let result = "";

  if(input.trim() === ""){
    document.getElementById("result").innerText="Please Enter Number";
    return;
  }else{""}
  for(let i=1; i <= 10; i++){
    result += `${num} x ${i} = ${num * i}\n `;
  }
  
  document.getElementById("num").value="";
  
  document.getElementById("result").innerText=  result ;
}