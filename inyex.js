//DATATYPES 

//PRIMITIVE DATA TYPES
//STRING : A TEXT ENCLOSED IN QUOTES
// var , let and const are used to declare variables in JavaScript.
var person = "John";
console.log(person); // Output: John
let myName = "Samuel";
console.log(myName); // Output: Samuel

//NUMBER : A NUMERIC VALUE
let age = 30;
const pi = 3.14;
console.log(age); // Output: 30
console.log(pi); // Output: 3.14


//BOOLEAN : A VALUE THAT CAN BE EITHER TRUE OR FALSE
const isStudent = true; 
console.log(isStudent); // Output: true
var name = 'Olateju';
console.log(name); // Output: Olateju


//Null : A VALUE THAT REPRESENTS THE ABSENCE OF ANY OBJECT VALUE
let emptyValue = null;
console.log(emptyValue); // Output: null


//UNDEFINED : A VALUE THAT IS NOT ASSIGNED TO ANY VARIABLE
let undefinedValue;
console.log(undefinedValue); // Output: undefined


// NON-PRIMITIVE DATA TYPES
//OBJECT : A COLLECTION OF PROPERTIES AND METHODS
let person1 = {
    name: "John",
    age: 30,
    isStudent: true
};
console.log(person1); // Output: { name: 'John', age: 30, isStudent: true }
function greet() {
    return "Hello, welcome to our Website!";
}
console.log(greet); // Output: [Function: greet]

