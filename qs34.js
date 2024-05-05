var animal = ["Leopard", "Lion", "Cheetah"];
for (var i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}
;
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var animals = animal_1[_i];
    if (animals === 'Leopard') {
        console.log("".concat(animals, "s has black spots on them."));
    }
    else if (animals === 'Lion') {
        console.log("".concat(animals, "s are called as king of Jungle."));
    }
    else if (animals === 'Cheetah') {
        console.log("".concat(animals, "s are fastest land animal."));
    }
}
console.log("All three of them hunt there prey and have sharp teeths and large paws.");
