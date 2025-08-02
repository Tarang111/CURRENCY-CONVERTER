const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const drop=document.querySelectorAll(".dropdown select");
const btn=document.getElementById("btn")
 const gest=document.querySelector(".amt input")
  const textt=document.querySelector(".amt p")
 const d1=document.querySelector(".from select")
  const d2=document.querySelector(".to select")
  const msg=document.getElementById("msg")
const update=(e)=>{
      
   let code=e.value
   let country=countryList[code];
   let srcc=`https://flagsapi.com/${country}/flat/64.png`
     let s=e.parentElement.querySelector("img");
      s.src=srcc
}


for( let select of drop)
{
    for(code in countryList)
    {
      let newopt=document.createElement("option");
      newopt.innerText=code;
      newopt.value=code;
        if(select.name==="from"&&code==="USD")
        {
            newopt.selected="selected"
        }
    else  if(select.name==="to"&&code==="INR")
        {
            newopt.selected="selected"
        }
        select.append(newopt);
    }
select.addEventListener('change',(e)=>{
    update(e.target);
});
}

btn.addEventListener('click',async(e)=>{

e.preventDefault();
let amount = parseFloat(gest.value);
   let from = d1.value.toLowerCase();
  let to = d2.value.toLowerCase();
 
const res = await fetch(`${BASE_URL}/${from}.json`);
    const data = await res.json();
    const rate = data[from][to];
    const convertedAmount = (amount * rate).toFixed(2);
    
 
   msg.innerText=`${amount} ${from.toUpperCase()} = ${convertedAmount} ${to.toUpperCase()} `



})