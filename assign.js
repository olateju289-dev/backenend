
1// sub string & slice
const str = "Nigeria is awesome";
// Extract "Nigeria" using substring()
const country = str.substring(0, 7);
console.log(country);
// Extract "awesome" using slice()
const word = str.slice(11);
console.log(word);
// Get "is" using slice()
const middle = str.slice(8, 10);
console.log(middle);


2// split
const names = "John,Jane,Doe";
// Split into array using ,
const arr = names.split(",");
console.log(arr);
// Join with space instead
const joined = arr.join(" ");
console.log(joined);
const path = "/user/home/docs";
// Split by /
const parts = path.split("/");
console.log(parts); 
// Get "home"
const home = parts[2];
console.log(home);




3// Mix
const email = "user@example.com";
// Get username
const username = email.split("@")[0];
console.log(username);
// Check if it ends with .com
const isCom = email.endsWith(".com");
console.log(isCom); 
// Replace @ with AT
const newEmail = email.replace("@", "AT");
console.log(newEmail);


