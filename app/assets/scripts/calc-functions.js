// holds numbers
let arr = [];

// holds numbers
let str = "";

const r2 = ["+", "-", "*", "/"];

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// clear string
const resetString = () => {
    str = "";
    return str;
}

// if str contains number, push it to array
const chkStrLen = () => {
    if (str.length > 0) {
        arr.push(str);
    }
}

// if arr contains duplicates, remove before calculating
const findDuplicates = (value, idx, self) => self.indexOf(value) === idx;

// clears array and pushes total into it
const reset_push = (total) => {
    arr.length = 0;
    arr.push(total);
}

const displayString = () => {
    const display = document.querySelector("#display");
    display.innerHTML = str;
}

const displayArr = () => {
    const display = document.querySelector("#display");
    display.innerHTML = arr;
}

const calculate = (ele) => {
    if (ele === "+") {
        let total = add(parseFloat(arr[0], 10), parseFloat(arr[2], 10));
        reset_push(total);
    } else if (ele === "-") {
        let total = subtract(parseFloat(arr[0], 10), parseFloat(arr[2], 10));
        reset_push(total);
    } else if (ele === "*") {
        let total = multiply(parseFloat(arr[0], 10), parseFloat(arr[2], 10));
        reset_push(total);
    } else if (ele === "/") {
        let total = divide(parseFloat(arr[0], 10), parseFloat(arr[2], 10));
        reset_push(total);
    }
}

const numEvents = (id, num) => {
    const btns = document.querySelectorAll("button");
    btns.forEach((ele) => {
        // add event listener to all btns
        ele.addEventListener("click", (e) => {
            // if target btn id matches called id, add that num to str and display on screen
            if (e.target.id === id) {
                str += num;
                displayString();
            }
        });
    });
}

const operatorEvents = (id, sign) => {
    const display = document.querySelector("#display");
    const btns = document.querySelectorAll("button");
    btns.forEach((ele) => {
        // add event listener to all btns
        ele.addEventListener("click", (e) => {
            // if string is empty, disable operator btns
            if (str.length === 0) {
                return;
            // if target btn id matches called id, add that num to str and display on screen
            } else if (e.target.id === id) {
                // only push string if it contains a number
                chkStrLen();
                // push operator
                arr.push(sign);
                resetString();
            } else if (arr.length > 3) {
                let last = arr.pop();
                arr.forEach(calculate);
                arr.push(last);
                display.innerHTML = arr[0];
            }
        });
    });
}

// num events
numEvents("zero", 0);
numEvents("one", 1);
numEvents("two", 2);
numEvents("three", 3);
numEvents("four", 4);
numEvents("five", 5);
numEvents("six", 6);
numEvents("seven", 7);
numEvents("eight", 8);
numEvents("nine", 9);
numEvents("decimal", ".");
numEvents("negative", "-");

// operator events
operatorEvents("add", "+");
operatorEvents("subtract", "-");
operatorEvents("multiply", "*");
operatorEvents("divide", "/");

// clear data and display
document.querySelector("#clear").addEventListener("click", () => {
    const display = document.querySelector("#display");
    resetString();
    arr.length = 0;
    display.innerHTML = "0";
});

// get total
document.querySelector("#total").addEventListener("click", () => {
    chkStrLen();
    resetString();
    arr.forEach(calculate);
    displayArr();
    arr.length = 0;
});