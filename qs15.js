var GuestList = ["Amjad", "Anas", "Habib"];
console.log("Good news! I have found a bigger table");
GuestList.unshift("Sarah");
var middleInd = Math.floor(GuestList.length / 2);
GuestList.splice(middleInd, 0, "Aman");
GuestList.push("Areeb");
GuestList.forEach(function (allGuest) {
    console.log("Assalam o Alaikum ".concat(allGuest, " you are invited in dinner."));
});
console.log(GuestList);
