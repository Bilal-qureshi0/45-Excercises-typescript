let age = 100;
if (age > 0 && age < 2){
    console.log("The person is a baby.");
} else if(age >= 2 && age <= 3){
    console.log("The person is a toddler.");
} else if(age >= 4 && age <= 12){
    console.log("The person is a kid.");
} else if(age >= 13 && age <= 19){
    console.log("The person is a teenager.");
} else if(age >= 20 && age <= 64){
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}