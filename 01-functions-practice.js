//STEP 1
function halfNumber(number){
    window.console.log("Half " + number + " of is " + number/2 + ".");
}
//STEP 2
function squareNumber(number){
    window.console.log("The result of squaring the number " + number + " is " + number**2 + ".");
}
//STEP 3
function percentOf(number1, number2){
    window.console.log(number1 + " is " + number1/number2*100 + "% of " + number2 + ".");
}
//STEP 4
function findModulus(number1, number2){
    window.console.log(number2%number1 + " is the modulus of " + number1 + " and " + number2 + ".");
}

halfNumber(30)
squareNumber(30)
percentOf(9, 30)
findModulus(9, 30)