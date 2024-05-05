var guestList = ["Amjad", "Shafiq", "Habib"];
console.log(guestList);
var cannotAttend = "Shafiq";
console.log(cannotAttend + " " + 'cannot attend dinner');
var newGuest = "Anas";
guestList[1] = newGuest;
guestList.forEach(function (updGuests) {
    console.log("Assalam o Alaikum ".concat(updGuests, " you are invited in dinner."));
});
