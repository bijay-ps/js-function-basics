class User {
    constructor(fn, birthYear) {
        this.fn = fn;
        this.birthYear = birthYear;
    }
     
    greet() {
        const age = 2023 - this.birthYear;
        console.log(`Hello, my name is ${this.fn}, and I am ${age} years old`);
    }
}

// instance (or objects created based on the class)

// const abc = {
//   name: "abc",
//   age: 23
// }

const john = new User('John Doe', 1988);
// What does'new' keyword do, in order
// 1. it creates an empty object, {}
// 2. function will be called, and the 'this' keyword will point 
// to the newly created empty object ( this = {})
// 3. newly created empty object from step 1 will be linked to Prototype
// 4.the created object will be returned from the function automatically
const jane = new User('Jane Doe', 1994);

console.log(john);
// console.log(jane);

john.greet(); // the this keyword will point to the john object
jane.greet(); // the this keyword will point to the jane object

// let User = class {} - class expression
// function test() {} 
// const sampleFun = function() {}

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    calcArea() {
        const area = this.length * this.width;
        return area;
    }

    calcPerimeter() {
        const perimeter = 2*(this.length+this.width);
        return perimeter;
    }
}

const rect1 = new Rectangle(10, 5); // rect1 is an object
const rect2 = new Rectangle(7.8, 6.5);

console.log(rect1);
const rect1Area = rect1.calcArea();
const react1P = rect1.calcPerimeter();

console.log(rect1Area, react1P);

const obj = {
    name: 'Mango',
    fruitName: function() {
        let a = 2;
        test = () => {
            let pi = 3.14;
            console.log(a);
            console.log(this);
        }
        test();
        console.log(this);
        console.log(this.name);
    }
}

obj.fruitName();

function func1() {
    let k = 8;
    console.log(this);
    console.log(this.k);
}

func1();

test = () => {
    let pi = 3.14;
    console.log(this);
}

test();