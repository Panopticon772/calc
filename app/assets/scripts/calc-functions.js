const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const findBtn = (id) => {
    const getNumBtn = document.getElementsByTagName("button");
    for (let i = 0; i < getNumBtn.length; i++) {
        if (getNumBtn[i].id === id) {
            return getNumBtn[i];
        }
    }
}

const numStr = (num) => str += num;

const strToArray = (str) => arr.push(str);

const emptyString = (str) => {
    str = "";
    return str;
}

const arr = [];

let str = "";

findBtn("one").addEventListener("click", () => {
    numStr(1); 
    console.log(str);
});

findBtn("add").addEventListener("click", () => {

});

// functional programming
/* let arr = [1, 2, 3, 4, 5];

let f = (x) => x % 2 === 0;

let m = (x) => x * 2;

console.log(arr); // original arr untouched
console.log(arr.filter(f).map(m)); // modified arr */