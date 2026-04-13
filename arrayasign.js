// forEach


const numbers = [2, 4, 6, 8, 10];
numbers.forEach(function(numbers) {
    console.log(numbers * 2);
});

const names = ["Esther", "John", "Ada", "Mike"];

names.forEach(function(name) {
    console.log("Hello " + name + "!");
});



// map
const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers2.map(function(numbers) {
    return numbers * numbers;
});
console.log(squaredNumbers);
const prices = [100, 200, 300];
const discountedPrices = prices.map(function(price) {
    return price - (price * 0.10);
});
console.log(discountedPrices);



// filter
const numbersToFilter = [5, 12, 8, 20, 3];
const result = numbersToFilter.filter(function(numbers) {
    return numbers > 10;
});

console.log(result);

const ages = [15, 22, 17, 30, 18];

const adults = ages.filter(function(age) {
    return age >=18;
});

console.log(adults);