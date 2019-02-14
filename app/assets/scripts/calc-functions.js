// get num btns
const getNumBtn = document.querySelectorAll(".num-btn");
console.log(getNumBtn);
// get operator btns
const getOperators = document.querySelectorAll(".operators");
console.log(getOperators);

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

let numStr = "";

const numArr = [];

// one
getNumBtn[1].addEventListener("click", () => {
    numStr += "1";
    console.log(`plus 1 for each click: ${numStr}`);
});

// addition
getOperators[0].addEventListener("click", () => {
    numArr.push(numStr);
    numArr.push("+");
    numStr = "";
    console.log(`numStr: ${numStr}`);
    console.log(numArr);
});

// subtraction
getOperators[1].addEventListener("click", () => {
    strArr.push("-");
    console.log(strArr);
});

// equals
getOperators[5].addEventListener("click", () => {
    numArr.push(numStr);
    numStr = "";
    console.log(numArr);
    // loop through array, if + add previous indice and after indice
    for (let i = 0; i < numArr.length; i++) {
        if (operators.hasOwnProperty("+")) {
            console.log(operators["+"](parseInt(numArr[0]), parseInt(numArr[2])));
        } else {
            console.log("Not an addition problem.");
        }
    }
});