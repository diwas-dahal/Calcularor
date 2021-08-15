// history variables
const historyButton = document.querySelector(".history-button");
const historyBox = document.querySelector(".history-box");
const historyClose = document.querySelector(".history-close");
// end of history varables

// numbers variables
const zero = document.getElementById("0");
const numOne = document.getElementById("1");
const numTwo = document.getElementById("2");
const numThree = document.getElementById("3");
const numFour = document.getElementById("4");
const numFive = document.getElementById("5");
const numSix = document.getElementById("6");
const numSeven = document.getElementById("7");
const numEight = document.getElementById("8");
const numNine = document.getElementById("9");
const numTwozero = document.getElementById("00");
const point = document.getElementById(".");
const numList = [zero, numOne, numTwo, numThree, numFour, numFive, numSix, numSeven, numEight, numNine, numTwozero, point]
// end of numbers variables

// operators [var]
const addition = document.getElementById("+");
const subtraction = document.getElementById("-");
const division = document.getElementById("/");
const multiplication = document.getElementById("*");
const square = document.getElementById("*2");
const squareroot = document.getElementById("**0.5");
const backspace = document.getElementById("X");
const Clearall = document.getElementById("C");
const clear = document.getElementById("CE");
const modulus = document.getElementById("%");
const operatorslist = [backspace, Clearall, clear];
const primaryOperators = [addition, subtraction, division, multiplication, modulus]
const secondaryOperator = [square, squareroot]
let resultGen = false;
const equals = document.getElementById("=");
// bars
let primarybar = document.querySelector(".primary-bar-p");
let secondarybar = document.querySelector(".secondary-bar-p");




function main(){
    historyFirstExp = [];
    historySeconExp = [];
    // History stuffs
    historyButton.addEventListener("click", () => { 
        historyBox.classList.add("show");
    })
    historyClose.addEventListener("click", () => {
        historyBox.classList.remove("show")
    })
    // End of history stuffs

    // number stuffs
    numList.forEach((number) => {
        number.addEventListener("click", (event) => {
            if (resultGen == true){
               primarybar.innerHTML = "";
               secondarybar.innerHTML = "";
               primarybar.style.color = "black" 
               resultGen = false;
             }

            primarybar.innerHTML += event.target.innerHTML;

            if(primarybar.innerHTML.length >= 15){
                primarybar.style.fontSize = "25px";
            }else{
                primarybar.style.fontSize = "35px";
            }
        })
    })
    // end of number stuffs

    // operators
    operatorslist.forEach((operator) => {
        operator.addEventListener("click", (event) => {
            let operatorid = event.target.id;
            if (resultGen == true){
                primarybar.innerHTML = "";
               secondarybar.innerHTML = "";
               primarybar.style.color = "black"
                resultGen = false;
             }
            if (operatorid === "C"){ // clear primary bar
                primarybar.innerHTML = "";
            }
            if (operatorid === "CE"){ // clear all the bars
                primarybar.innerHTML = "";
                secondarybar.innerHTML = "";
            }
            if (operatorid === "X"){
                primarybar.innerHTML = primarybar.innerHTML.substring(0, primarybar.innerHTML.length - 1);
            }
            if(primarybar.innerHTML.length >= 17){
                primarybar.style.fontSize = "25px";
            }else{
                primarybar.style.fontSize = "35px";
            }


        })
    })

    // primary operator
    primaryOperators.forEach((primoperator) => {
        primoperator.addEventListener("click", (event) => {
            if (primarybar.innerHTML === ""){
                primarybar.innerHTML = 0;
            }
            if (resultGen == true){
               primarybar.innerHTML = "";
               secondarybar.innerHTML = "";
               primarybar.style.color = "black";
               resultGen = false;
             }
            secondarybar.innerHTML += primarybar.innerHTML + " " + event.target.id + " "; // change secondary bar
            primarybar.innerHTML = ""; // empty primarybar



            if(primarybar.innerHTML.length >= 17){
                primarybar.style.fontSize = "25px";
            }else{
                primarybar.style.fontSize = "35px"
            }
        })

    })

    // secondary operator
    secondaryOperator.forEach((secoperator) => {
        secoperator.addEventListener("click", (event) => {
            if (primarybar.innerHTML === ""){
                primarybar.innerHTML = 0;
            }
            let operation2 = event.target.id;
            secondarybar.innerHTML = primarybar.innerHTML;
            primarybar.innerHTML = "";

            if (operation2 === "*2"){ // square
                resultGen = true;
                console.log("true");
                primarybar.innerHTML = secondarybar.innerHTML ** 2;
                primarybar.style.color = "green"
            }
            if (operation2 === "**0.5"){ // square root
                resultGen = true;
                primarybar.innerHTML = secondarybar.innerHTML ** 0.5;
                primarybar.style.color = "green"
            }

            if(primarybar.innerHTML.length >= 17){
                primarybar.style.fontSize = "blue";
            }else{
                primarybar.style.fontSize = "35px"
            }
        })
    })
    equals.addEventListener("click", () => {
        if (secondarybar.innerHTML == ""){
            primarybar.innerHTML = "0";
        }
        if (primarybar.innerHTML == ""){
            primarybar.innerHTML = secondarybar.innerHTML;
        }else{
            primarybar.innerHTML = secondarybar.innerHTML.trim()
        }

     })


}


document.addEventListener("DOMContentLoaded", main());