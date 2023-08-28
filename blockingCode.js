function blockingCode(msg) {
    let n = 10000000000;
    while(n>0){
        n--;
    }
    console.log(msg);
}

// console.log('Starting....');
// blockingCode('Function called and executed');
// console.log('Done!');

function fetchDataFromServer(callback) {
    setTimeout(function() {
        const data = 'Some String'
        callback(data) // blockingCode(data)
    }, 5000)
}   

console.log('Starting...');

fetchDataFromServer(blockingCode); //callback

console.log('Ending....');