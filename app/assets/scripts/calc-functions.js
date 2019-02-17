const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

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

const findBtn = (id) => {
    const getNumBtn = document.getElementsByTagName("button");
    for (let i = 0; i < getNumBtn.length; i++) {
        if (getNumBtn[i].id === id) {
            return getNumBtn[i];
        }
    }
}

const numStr = (num) => str += num;

const strToArray = () => arr.push(str);

const resetString = () => {
    str = "";
    return str;
}

const resetArr = (arr) => arr.length = 0;

const chkStrLen = () => {
    if (str.length > 0) {
        strToArray();
        console.log(arr);
    }
}

const calculate = (ele) => {
    if (ele === "+") {
        let total = add(parseInt(arr[0], 10), parseInt(arr[2], 10));
        console.log(total);
        resetArr(arr);
        console.log(arr);
        arr.push(total);
        console.log(arr);
    } else if (ele === "-") {
        let total = subtract(parseInt(arr[0], 10), parseInt(arr[2], 10));
        console.log(total);
        resetArr(arr);
        console.log(arr);
        arr.push(total);
        console.log(arr);
    } else if (ele === "*") {
        let total = multiply(parseInt(arr[0], 10), parseInt(arr[2], 10));
        console.log(total);
        resetArr(arr);
        console.log(arr);
        arr.push(total);
        console.log(arr);
    } else if (ele === "/") {
        let total = divide(parseInt(arr[0], 10), parseInt(arr[2], 10));
        console.log(total);
        resetArr(arr);
        console.log(arr);
        arr.push(total);
        console.log(arr);
    }
}

const arr = [];

let str = "";

findBtn("one").addEventListener("click", () => {
    // add 1 to string
    numStr(1); 
    console.log(str);
});

findBtn("two").addEventListener("click", () => {
    // add 2 to string
    numStr(2); 
    console.log(str);
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

findBtn("total").addEventListener("click", () => {
    chkStrLen();
    resetString();
    arr.forEach(calculate);
});

// functional programming
/* let arr = [1, 2, 3, 4, 5];

let f = (x) => x % 2 === 0;

let m = (x) => x * 2;

console.log(arr); // original arr untouched [1, 2, 3, 4, 5]
console.log(arr.filter(f).map(m)); // modified arr [4, 8]*/