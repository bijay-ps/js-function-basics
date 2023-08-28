function add(num) {
    let numPassed = num; //Variable Declaration
    return function() { // returning a function
        const toAdd = 5;
        console.log('line no. 4:',numPassed);
        console.log('line no. 5:', toAdd);
        console.log('line no. 6:', numPassed + toAdd)
    }
}

const val1 = add(3); // Function Expression
val1()
