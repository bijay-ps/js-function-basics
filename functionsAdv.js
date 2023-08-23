// Type 2 Function expression

const xyz = function() {
    console.log('Hello my name is Rocky')
}

xyz();

const addition = function(num1, num2) {
    const res = num1 + num2;
    console.log(res)
}

addition(3,4)

// Anonymous functions
const result = (function(a,b) {
    console.log(a*b)
    return a*b;
})(5,6)

console.log(result);

// Arrow functions
const division = (i,j) => {
    const rem = i/j;
    console.log(rem)
}

division(246, 4);

const returnOnlyOneVal = i => i*10; // Type of Arrow Function


console.log(returnOnlyOneVal(9))

// Recursive function: Where function will call itself
function countdown(val) {
    // base case: Where the execution should stop
    if (val === 0) {
        return;
    }

    // recursion call
    console.log(val);
    val = val - 1;
    countdown(val);
}

countdown(5)

// Generator functions
function* generator(i) {
    const add2 = i+2;

    yield add2;
    yield i+10;
    yield i+20;
}

const gen = generator(10);
console.log(gen)
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* createIds() {
    let index = 0;
    while(true) {
        index = index + 1;
        yield index;
    }
}

const ids = createIds();
console.log(ids.next());
console.log(ids.next())