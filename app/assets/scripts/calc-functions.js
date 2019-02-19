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
    const getNumBtn = document.getElementsByTagName("button");
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
        strToArray();
        console.log(arr);
    }
}

// clears array and pushes total into it
const reset_push = (total) => {
    resetArr(arr);
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

// holds numbers
const arr = [];

// holds numbers
let str = "";

findBtn("zero").addEventListener("click", () => {
    // add 1 to string
    numStr(0); 
    console.log(str);
    displayString();
});

findBtn("one").addEventListener("click", () => {
    // add 1 to string
    numStr(1); 
    console.log(str);
    displayString();
});

findBtn("two").addEventListener("click", () => {
    // add 2 to string
    numStr(2); 
    console.log(str);
    displayString();
});

findBtn("three").addEventListener("click", () => {
    // add 2 to string
    numStr(3); 
    console.log(str);
    displayString();
});

findBtn("four").addEventListener("click", () => {
    // add 2 to string
    numStr(4); 
    console.log(str);
    displayString();
});

findBtn("five").addEventListener("click", () => {
    // add 2 to string
    numStr(5); 
    console.log(str);
    displayString();
});

findBtn("six").addEventListener("click", () => {
    // add 2 to string
    numStr(6); 
    console.log(str);
    displayString();
});

findBtn("seven").addEventListener("click", () => {
    // add 2 to string
    numStr(7); 
    console.log(str);
    displayString();
});

findBtn("eight").addEventListener("click", () => {
    // add 2 to string
    numStr(8); 
    console.log(str);
    displayString();
});

findBtn("nine").addEventListener("click", () => {
    // add 2 to string
    numStr(9); 
    console.log(str);
    displayString();
});

findBtn("add").addEventListener("click", () => {
    // only push string if it contains a number
    chkStrLen();
    // apply sign
    sign("+");
    console.log(arr);
    resetString();
    console.log(str);
});

findBtn("subtract").addEventListener("click", () => {
    // only push string if it contains a number
    chkStrLen();
    // apply sign
    sign("-");
    console.log(arr);
    resetString();
    console.log(str);
});

findBtn("multiply").addEventListener("click", () => {
    // only push string if it contains a number
    chkStrLen();
    // apply sign
    sign("*");
    console.log(arr);
    resetString();
    console.log(str);
});

findBtn("divide").addEventListener("click", () => {
    // only push string if it contains a number
    chkStrLen();
    // apply sign
    sign("/");
    console.log(arr);
    resetString();
    console.log(str);
});

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