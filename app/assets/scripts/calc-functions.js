// holds numbers
let arr = [];

// holds numbers
let str = "";

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
        console.log(arr);
    }
}

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

// const disableNum = () => {
//     const btns = document.getElementsByClassName("num-btn");
//     console.log(btns);
//     for (let i = 0; i < btns.length; i++) {
//         console.log(btns[i].classList);
//         if (arr.length > 3) {
//             btns[i].disabled = true;
//         }
//     }
// }

// disableNum();

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
                console.log(str);
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
            // if target btn id matches called id, add that num to str and display on screen
            if (e.target.id === id) {
                // only push string if it contains a number
                chkStrLen();
                // push operator
                arr.push(sign);
                console.log(arr);
                resetString();
                console.log(str);
            } else if (arr.length > 3) {
                // chkStrLen();
                // resetString();
                let last = arr.pop();
                console.log(last);
                arr.forEach(calculate);
                arr.push(last);
                console.log(arr);
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
    console.log(str);
    arr.length = 0;
    console.log(arr);
    display.innerHTML = "0";
});

// get total
document.querySelector("#total").addEventListener("click", () => {
    chkStrLen();
    resetString();
    arr.forEach(calculate);
    console.log(arr);
    displayArr();
});

// last num hit, add to str, then push string immediately to arr, calculate

/* // functional programming
let arr = [1, 2, 3, 4, 5];

let f = (x) => x % 2 === 0;

let m = (x) => x * 2;

console.log(arr); // original arr untouched [1, 2, 3, 4, 5]
console.log(arr.filter(f).map(m)); // modified arr [4, 8] */