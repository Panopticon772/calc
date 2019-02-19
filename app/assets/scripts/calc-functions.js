const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// push correct sign to array
const sign = (sign) => {
    switch (sign) {
        case "+":
            arr.push("+");
            break;
        case "-":
            arr.push("-");
            break;
        case "*":
            arr.push("*");
            break;
        case "/":
            arr.push("/");
            break;
    }
}

// find correct button
const findBtn = (id) => {
    const getNumBtn = document.querySelectorAll("button");
    for (let i = 0; i < getNumBtn.length; i++) {
        if (getNumBtn[i].id === id) {
            return getNumBtn[i];
        }
    }
}

// add number to empty string
const numStr = (num) => str += num;

// push string into array
const strToArray = () => arr.push(str);

// clear string
const resetString = () => {
    str = "";
    return str;
}

// clear arr
const resetArr = (arr) => arr.length = 0;

// if str contains number, push it to array
const chkStrLen = () => {
    if (str.length > 0) {
        arr.push(str);
        console.log(arr);
    }
}

// clears array and pushes total into it
const reset_push = (total) => {
    arr.length = 0;
    arr.push(total);
}

displayString = () => {
    const display = document.querySelector("#display");
    display.innerHTML = str;
}

const displayArr = () => {
    const display = document.querySelector("#display");
    display.innerHTML = arr;
}

const calculate = (ele) => {
    if (ele === "+") {
        let total = add(parseInt(arr[0], 10),parseInt(arr[2], 10));
        reset_push(total);
    } else if (ele === "-") {
        let total = subtract(parseInt(arr[0], 10), parseInt(arr[2], 10));
        reset_push(total);
    } else if (ele === "*") {
        let total = multiply(parseInt(arr[0], 10),parseInt(arr[2], 10));
        reset_push(total);
    } else if (ele === "/") {
        let total = divide(parseInt(arr[0], 10), parseInt(arr[2], 10));
        reset_push(total);
    }
}

// event listener
const numEvent = () => {
    const getNumBtn = document.querySelectorAll("button");
    getNumBtn.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "one":
                    numStr(1);
                    console.log(str);
                    break;
                case "two":
                    numStr(2);
                    console.log(str);
                    break;
                case "three":
                    numStr(3);
                    console.log(str);
                    break;
                case "four":
                    numStr(4);
                    console.log(str);
                    break;
                case "five":
                    numStr(5);
                    console.log(str);
                    break;
                case "six":
                    numStr(6);
                    console.log(str);
                    break;
                case "seven":
                    numStr(7);
                    console.log(str);
                    break;
                case "eight":
                    numStr(8);
                    console.log(str);
                    break;
                case "nine":
                    numStr(9);
                    console.log(str);
                    break;
                case "add":
                    // only push string if it contains a number
                    chkStrLen();
                    // apply sign
                    sign("+");
                    console.log(arr);
                    resetString();
                    console.log(str);
                    break;
                case "subtract":
                    // only push string if it contains a number
                    chkStrLen();
                    // apply sign
                    sign("-");
                    console.log(arr);
                    resetString();
                    console.log(str);
                    break;
                case "multiply":
                    // only push string if it contains a number
                    chkStrLen();
                    // apply sign
                    sign("*");
                    console.log(arr);
                    resetString();
                    console.log(str);
                    break;
                case "divide":
                    // only push string if it contains a number
                    chkStrLen();
                    // apply sign
                    sign("/");
                    console.log(arr);
                    resetString();
                    console.log(str);
                    break;
            }
            displayString();
        });
    });
}

// holds numbers
const arr = [];

// holds numbers
let str = "";

numEvent();

findBtn("clear").addEventListener("click", () => {
    const display = document.querySelector("#display");
    resetString();
    console.log(str);
    resetArr(arr);
    console.log(arr);
    display.innerHTML = "0";
});

findBtn("total").addEventListener("click", () => {
    chkStrLen();
    resetString();
    arr.forEach(calculate);
    console.log(arr);
    displayArr();
});

/* // functional programming
let arr = [1, 2, 3, 4, 5];

let f = (x) => x % 2 === 0;

let m = (x) => x * 2;

console.log(arr); // original arr untouched [1, 2, 3, 4, 5]
console.log(arr.filter(f).map(m)); // modified arr [4, 8] */