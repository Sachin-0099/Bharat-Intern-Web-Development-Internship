let celsiusInput = document.querySelector('#celsius > input')
let farhenheitInput = document.querySelector('#farhenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let btn=document.querySelector('.button button')
function roundnumber(number){
    return Math.round(number*100)/100
}
celsiusInput.addEventListener('input',function(){
    let cTemp=parseFloat(celsiusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let ktemp=cTemp+273.15
    farhenheitInput.value=roundnumber(fTemp)
    kelvinInput.value=roundnumber(ktemp)
})
farhenheitInput.addEventListener('input',function(){
    let fTemp=parseFloat(farhenheitInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let ktemp=(fTemp-32)*(5/9)+273.15
    celsiusInput.value=roundnumber(cTemp)
    kelvinInput.value=roundnumber(ktemp)
})
kelvinInput.addEventListener('input',function(){
    let kTemp=parseFloat(kelvinInput.value)
    let cTemp=ktemp-273.15
    let ktemp=(ktemp-273.15)*(9/5)+32
    farhenheitInput.value=roundnumber(fTemp)
   celsiusInput.value=roundnumber(ctemp)
})
btn.addEventListener('click',()=>{
    celsiusInput.value=""
    farhenheitInput.value=""
    kelvinInput.value=""
})