function getFullName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName; //Option 1
    const fullName2 = `${firstName} ${lastName}`; // Option 2
    // return {
    //     name1: fullName,
    //     name2: fullName2
    // }; // Option 1 to return more than 1 item

    // return [fullName, fullName2] // Option 2 to return more than 1 item

    return fullName;
}

const fname = getFullName("Bijay", "Singh");
// console.log(fname);

function isPrime(num) {
    let isPrime = true;
    if(num === 1) {
        // return; simply stops the function execution and return 
        return `${num} is not a prime number`
    }

    for (let i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        } 
    }
    return isPrime;
}

const res = isPrime(7);
console.log(`Is 7 a prime number: ${res}`);

const res2 = isPrime(10);
console.log(`Is 10 a prime number: ${res2}`);