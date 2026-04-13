// Assignment 

let customerName = "Samuel";
let customerAge = 22;
let bookTitle = "The Book of Life";
let bookPrice = 3000;
let quantity = 5;
let isstudent = true;

console.log("Customer Name: " + customerName);
console.log("Customer Age: " + customerAge);
console.log("Book Title: " + bookTitle);
console.log("Price: $" + bookPrice);
console.log("Quantity: " + quantity);
console.log("Is Student: " + isstudent);

// Arithmetic operation to calculate total price
let totalPrice = bookPrice * quantity;
console.log("Total Price: $" + totalPrice);

// Comparison operation to check if the customer is eligible for a student discount
let isAdult = customerAge >= 18;
let buyingManyBooks = quantity > 5;
let isBookThreeThousand = bookPrice === 3000;

console.log("Is the customer an adult? " + isAdult);
console.log("Is the customer buying more than 5 books? " + buyingManyBooks);
console.log("Is the book price exactly $3000? " + isBookThreeThousand);

// Non primitive data type 
const customerOrder = {
    customerName: customerName,
    bookTitle: bookTitle,
    quantity: quantity,
    totalPrice: totalPrice
};


