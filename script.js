// A.Lucas and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
//BMI = mass / (height * height)
//mass in kg, height in meter
//Steps:
//1. Store two persons' mass and height in variables,
//2. Calculate their BMI accordingly
//3. Compare their BMI, store the result in a variable lucasHigherBMI, Log blew message to console:
//“The BMI of John is ? The BMI of Lucas is ? Lucas' BMI is higher than John's BMI that is True/False”
//Testing data:
//Lucas, 78kg 1.69m tall


let Lmass = 78
let Jmass = 92
let Lheight = 1.69
let Jheight = 1.95

const LucasBMI= Lmass/(Lheight * Lheight)
const JohnBMI= Jmass/(Jheight * Jheight)
const LmassGreaterThanJHeight = Lmass > Jmass

console.log ('Lucas' BMI is LucasBMI')
console.log ('John's BMI is JohnBMI')
console.log ('Lucas' BMI is higher than John's BMI. $(LmassGreaterThanJHeight)is true.)


//B.The Temperature Converter - Let's make a converter based on the steps here and display the coverted
//result. -Use template literals Only to display the result
//• Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
//• Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is
//NN°C."

let c =prompt('Please enter your degree in Celsius')

var UserCelTemp= Temperature in Celsius
function toFahren(c) {
    return (9/5)*c + 32;
}

const.log UserCelTemp=prompt (Temperature in Celsius)
document.getElementsByName("UserCelTemp");

console.log ('$(UserCelTemp) ºC is $(toFahren)ºF.')

let f =prompt('Please enter your degree in Fahrenheit')
var UserFahTemp= Temperature in Fahrenheit
function toCel(f) {
    return (5/9)*(f-32);
}

const.log UserFahTemp=prompt (What is the degree in Fahrenheit?)
document.getElementsByName(UserFahTemp);

console.log ('$(UserFahTemp)ºF is $(toCel)ºC.')

//C.Use the BMI example from part A, and the code you already wrote, and improve it:
//1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Lucas'
//BMI is higher than John's!" or "John's BMI is higher than Lucas'!"
//2. Use a template literal to include the BMI values in the outputs. Example: "Lucas' BMI (28.3) is higher
//than John's (23.9)!"
//HINT: Use an if/else statement
// Data 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
// Data 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106


// console.log (Lucas' BMI is higher than John's BMI)

If (Lucas BMI > John's BMI) {
  console.log ('Lucas' BMI $(LucasBMI) is higher than John's BMI ($(JohnBMI).');
} else {
  console.log (John's BMI $(JohnBMI) is higher than Lucas's BMI ($(LucasBMI).');
}
