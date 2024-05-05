let guestList = ["Amjad", "Shafiq", "Habib"];
console.log(guestList);
let cannotAttend = "Shafiq";
console.log(cannotAttend + " " + 'cannot attend dinner.')
let newGuest = "Anas"
guestList[1] = newGuest;
guestList.forEach(updGuests => {
    console.log(`Assalam o Alaikum ${updGuests} you are invited in dinner.`)
})