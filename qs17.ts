let countries = ["Paris", "Belgium", "Japan", "Saudia", "America"];
console.log(countries);

console.log("Alphabetical order:",[...countries].sort());
console.log(countries)

console.log("Reverse Alphabetical order:",[...countries].sort().reverse());
console.log(countries);

countries.reverse()
console.log("Order of array has been changed:",countries)

countries.reverse()
console.log("Back to original order:",countries);

countries.sort();
console.log("Array in alphabetical order:", countries);

countries.sort((a,b) => b.localeCompare(a));
console.log("Array in reverse alphabetical order:", countries);
