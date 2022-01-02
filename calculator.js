let button0 = document.getElementById("btn0");
let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let buttonPlus = document.getElementById("btnPlus")
let button4 = document.getElementById("btn4")
let button5 = document.getElementById("btn5")
let button6 = document.getElementById("btn6")
let buttonMinus = document.getElementById("btnMinus")
let button7 = document.getElementById("btn7");
let button8 = document.getElementById("btn8");
let button9 = document.getElementById("btn9");
let buttonDivide = document.getElementById("btnDivide");
let buttonEquals = document.getElementById("btnEquals");
let buttonDot = document.getElementById("btnDot");

let display = document.getElementById("calcDisplay")
let calcDisplay = ""

const numberClicked = (number) =>{
    return () => {
        calcDisplay += number;
        display.innerText = calcDisplay;
    };
}

let numberButtons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9];
numberButtons.forEach((button, number) => {
    button.addEventListener('click', numberClicked(number))
});