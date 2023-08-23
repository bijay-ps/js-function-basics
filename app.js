// Type 1 Function Declaration
function juicer() {
    console.log('This function mimics a juicer');
}

juicer();
juicer();
juicer();

// Type 2 passing param
function juicerWithParam(fruit) {
    // const i = 10;
    // console.log(`i = ${i}`);
    console.log(`Recieved ${fruit} as input`); 
}

juicerWithParam("Apple");
juicerWithParam("Mango");
juicerWithParam("Orange");

function sumTwoNos(num1,num2) {
    // const fname = "AB";
    const sum = num1 + num2;
    // if(sum > 0) {
    //     return true;
    // } else {
    //     return false
    // }
    return sum;
    console.log('TEST') // Unreachable code
}

// console.log(fname)
const sumResult = sumTwoNos(23,-79); // => sumResult = 102
console.log(sumResult)

let num1 = 5;
let a = num1;

 // function areaOfCircle(pi = 3.14, radius) { This is incorrect as default param should always be the last one
function areaOfCircle(radius, pi = 3.14) {
    // const PI = 3.14;
    console.log(pi);
    console.log(radius);
    const area = pi * radius * radius;
    return area;
    // return pi * radius * radius;
}

// const ca = areaOfCircle(5);
const circleOneAr = areaOfCircle(5, 3.14159);
console.log(circleOneAr)
const circleTwoAr = areaOfCircle(8.2);
console.log(circleTwoAr);

// const set = new Set([1,2,3,1,3,4])
// console.log(set)

// const obj = {
//     name: 'value of name'
// }

// const obj1 = new Object();
// obj1.fn = "Rocky";

// console.log(obj1);

// const map = new Map()
// map.set('firstName', "Jane")

// console.log(map)

const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };

const mySet = new Set();

mySet.add(obj1);
mySet.add(obj2);

console.log(mySet);
console.log(mySet.size);
