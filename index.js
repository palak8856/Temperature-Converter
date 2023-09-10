const resultField= document.querySelector("#result");
const degree= document.querySelector("#degree");
const convertBtn= document.querySelector("#convert-btn");
const tempType= document.querySelector("#temp-type");

//windows loading reset
window.addEventListener("load", ()=> {
degree.value="";
resultField.innerHTML="";
}) 


convertBtn.addEventListener("click", (e)=> {
e.preventDefault();
convertToFahrenheit();

//add loading feature
convertBtn.innerHTML= "<span><i class='fa fa-spinner fa-spin'> </i>Converting..</span>";
setTimeout(() => {
convertBtn.innerHTML="<span>Convert</span>";
}, 1000)

})

function convertToFahrenheit(){
    let inputValue= degree.value;
 
    setTimeout(()=> {
        if(tempType.value==="celsius"){
            const CelsiusToFahrenheit= (inputValue * (9/5)) + 32;
            resultField.innerHTML=`${CelsiusToFahrenheit.toFixed(3)} &deg;c`;
        }
        else if(tempType.value==="kelvin"){
            const kelvinToFahrenheit= inputValue- 273.15;
            resultField.innerHTML=`${ kelvinToFahrenheit.toFixed(3)} &deg;c`;
        }
    }, 1200)
   
}