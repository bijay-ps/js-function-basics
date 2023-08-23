const name = "Bijay";
console.log(i);
let i = 12;

const first = () => { // This is a function, with the name "first"
    let num = 11;
    let b = second(); // the function by name "second" is called
    console.log(`b: ${b}`)
    const res = num + b;
    return res;
}

const second = () => { // This is another function, it's name is "second"
    let c = 20;
    return c;
}

const val = first();

console.log(`val: ${val}`)