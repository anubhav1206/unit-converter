/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnConvert = document.getElementById("btn-convert")
let input = document.getElementById("input-field")
let resLen = document.getElementById('resultLength')
let resVol = document.getElementById('resultVolume')
let resMass = document.getElementById('resultMass')
btnConvert,addEventListener("click", function(){
    resultL = `${input.value} metres = ${(input.value*3.281).toFixed(3)} feet | ${input.value} feet = ${(input.value*0.304).toFixed(3)} metres`
    resultV = `${input.value} litres = ${(input.value*0.2199).toFixed(3)} gallons | ${input.value} gallons = ${(input.value*4.54).toFixed(3)} litres`
    resultM = `${input.value} kilograms = ${(input.value*2.204).toFixed(3)} pounds | ${input.value} pounds = ${(input.value*0.453).toFixed(3)} kilograms`
    resLen.innerText = resultL;
    resVol.innerText = resultV;
    resMass.innerText = resultM;
    console.log(resultL)
    console.log(resultV)
    console.log(resultM)
})
