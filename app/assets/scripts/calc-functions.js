// get display icons
const getDisplay = document.querySelector("#display");
const getZero = document.querySelector("#zero");
const getOne = document.querySelector("#one");
const getTwo = document.querySelector("#two");
const getThree = document.querySelector("#three");
const getFour = document.querySelector("#four");
const getFive = document.querySelector("#five");
const getSix = document.querySelector("#six");
const getSeven = document.querySelector("#seven");
const getEight = document.querySelector("#eight");
const getNine = document.querySelector("#nine");
const getAdd = document.querySelector("#add");
const getSubtract = document.querySelector("#subtract");
const getMultiply = document.querySelector("#multiply");
const getDivide = document.querySelector("#divide");
const getDecimal = document.querySelector("#decimal");
const getResult = document.querySelector("#result");
const getClear = document.querySelector("#clear");

/* add
1. click number
2. store number -  arr? str?
3. click add symbol
4. click another number
5. display addition */

getOne.value = 1;

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

const add = "+";
const subtract = "-";
const multiply = "*";
const divide = "/";

getResult.addEventListener("click", () => {
    let result = operators[add](Number(getOne.value), Number(getOne.value));
    console.log(result);
});