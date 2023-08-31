const Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.greet = function() {
    //     console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    // }
}

Person.prototype.greet = function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
}

// What does'new' keyword do, in order
// 1. it creates an empty object, {}
// 2. function will be called, and the 'this' keyword will point 
// to the newly created empty object ( this = {})
// 3. newly created empty object from step 1 will be linked to Prototype of constructor function
// 4.the created object will be returned from the function automatically

const bijay = new Person("Bijay", "Singh"); // firstName, lastName and greet()
const shyam = new Person("Shyam", "Kumar"); // // firstName, lastName and greet()

// console.log(bijay);
// bijay.greet();
// console.log(shyam);
// shyam.greet();

const User = function(age) {
    this.age = age;
    // this.isAllowedToVote = function() {
    //     if(this.age >= 18) return true;
    //     else return false;
    // }
}

User.prototype.isAllowedToVote = function() {
    if(this.age >= 18) return true;
        else return false;
}

const u1 = new User(10); // age
const u2 = new User(30); // age
const isETV = u2.isAllowedToVote();
// console.log(isETV);

const PersonProto = {
    calcAge(){
        const age = 2023 - this.birthYear;
        return age;
    }
}

const deepak = Object.create(PersonProto);
deepak.lName = "Kumar";
deepak.birthYear = 2000;
console.log(deepak);
console.log(deepak.calcAge());