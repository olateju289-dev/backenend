let item1= "milk"
let item2= "bread"
let item3= "eggs"

let items = ["milk", "bread", "eggs"]

console.log(items[0])
console.log(items.length)

// forEach
let fruits = ["apple", "banana", "cherry", "orange", "grape"];
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

names,  fruits.forEach(function(name) {
    console.log("TECH_CRUSH_2026_COHORT_6: " + name);
}); 

fruits.forEach(function(fruit) {
    console.log("I eat " + fruit);
});

// map methods
let scores = [90, 80, 70, 60, 50];
let newScores = scores.map( x => {
console.log("as a good teacher , i decided to add 5 marks to all students")
return x + 5
})
console.log(newScores)  

let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

let nameTags = students.map(function(name) {
    return "TECH_CRUSH_2026_COHORT_6 " + name
})
console.log(nameTags);
