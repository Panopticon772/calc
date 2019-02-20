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
    })
}

const operatorEvents = (id, sign) => {
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
            }
        });
    })
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

// op events
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

/* findBtn("zero").addEventListener("click", () => {
    // add 0 to string
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
}); */

// findBtn("add").addEventListener("click", () => {
//     // only push string if it contains a number
//     chkStrLen();
//     // apply sign
//     sign("+");
//     console.log(arr);
//     resetString();
//     console.log(str);
// });

// findBtn("subtract").addEventListener("click", () => {
//     // only push string if it contains a number
//     chkStrLen();
//     // apply sign
//     sign("-");
//     console.log(arr);
//     resetString();
//     console.log(str);
// });

// findBtn("multiply").addEventListener("click", () => {
//     // only push string if it contains a number
//     chkStrLen();
//     // apply sign
//     sign("*");
//     console.log(arr);
//     resetString();
//     console.log(str);
// });

// findBtn("divide").addEventListener("click", () => {
//     // only push string if it contains a number
//     chkStrLen();
//     // apply sign
//     sign("/");
//     console.log(arr);
//     resetString();
//     console.log(str);
// });

/* // functional programming
let arr = [1, 2, 3, 4, 5];

let f = (x) => x % 2 === 0;

let m = (x) => x * 2;

console.log(arr); // original arr untouched [1, 2, 3, 4, 5]
console.log(arr.filter(f).map(m)); // modified arr [4, 8] */