let car = "Ferrari";
let otherCar = "Mehran";
console.log("Both cars are equal?",car === otherCar);

console.log("Both cars are equal?",car === 'Ferrari');

let name1 = "Ali";
let name2 = "ali";

console.log("Both names are equal?",name1 === 'Ali');
console.log("Both names are equal?",name1 === 'ali');

let age = 20;

console.log("Is age 20?", age === 20);
console.log("Is age 20?", age < 20);
console.log("Is age 20?", age > 20);
console.log("Is age 20?", age <= 20);
console.log("Is age 20?", age >= 20);

let color1 = "Blue";
let color2 = "Black";

console.log("Is color blue?", color1 && color2 ); 
console.log("Is color blue?", color1 || color2 );

let games = ["Gta", "CS", "Need for speed", "Assassin"];
console.log("Is Dota is in list?", games.includes('Dota'));
console.log("Is Gta in list of gmaes?", games.includes('Gta'));