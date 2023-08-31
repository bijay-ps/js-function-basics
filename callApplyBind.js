const indigo = {
    airline: 'Indigo',
    flightCode: '6E',
    bookings: [],
    book: function(flightNum, pName) {
        console.log(`${pName} booked seat on ${this.airline} ${this.flightCode}-${flightNum}`)
        this.bookings.push({ 
            flight: `${this.flightCode}-${flightNum}`,
            passenger: pName
        })
    }
}

indigo.book(123, 'Singh');
// console.log(indigo.bookings);

const airIndia = {
    airline: 'Air India',
    flightCode: 'AI',
    bookings: [],
}

const bookingFunc = indigo.book;
// console.log(bookingFunc);
// bookingFunc(321,'kr') this approach will not work

// call, apply & bind: All these are used to set the context of 'this' keyword

bookingFunc.call(airIndia, 321, 'Bijay');
bookingFunc.apply(airIndia, [341, 'Prakash']);

const copiedFun = bookingFunc.bind(airIndia, 567, 'Kumar');
copiedFun();

console.log(airIndia.bookings)

