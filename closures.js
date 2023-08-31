function add() {
    let toAdd = 5;
    return function(num) { // returning a function
        console.log('line no. 4:',num);
        console.log('line no. 5:', toAdd);
        console.log('line no. 6:', num + toAdd)
        return num+toAdd;
    }
}

const result = add(); // Function Expression
console.log(result(3));

