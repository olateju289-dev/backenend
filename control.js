// conditionals.js


// if-else statement
let userAge = 16
if (userAge >= 18) {
    console.log("Welcome to club 9ja!")
} else {
    console.log("Sorry, you're not allowed to enter.")
}



let gender = "male"
if (gender === "female") {
    console.log("Welcome to the female section!")
} else if (gender === "male") {
    console.log("Welcome to the male section!")
} else {
    console.log("We don't know where you belong")
}



let username = "hannah"
let password = "password123"
if(username === "hannah" && password === "password123") {
    console.log("Login successful")
} else if (username === "hannah" || password === "password123") {
    console.log("Username or password is correct")
} else {
    console.log("Login failed")
}



let age = 28
if (age >= 18) {
    console.log("You're eligible to vote!")
} else {
    console.log("Sorry, you're not eligible to vote!")
}


// loops.js


// for loops
for(let i = 0; i <= 5; i++) {
     console.log(i)
}



let arrayOfNames = ["Hannah", "David", "Precious", "Faith", "Esther"]
// console.log(arrayOfNames.length)
for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(arrayOfNames[i])
}

for (let greetings = 0; greetings < 3; greetings++) {
    console.log("Hello World!")
}


for (let x = 2; x <= 26; x *= 2) {
    console.log(x)
}


if (username === "hannah" && password === "password123") {
    console.log("Login successful")
} else {
    console.log("Invalid username or password")
}