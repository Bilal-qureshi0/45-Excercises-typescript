let GuestList = ["Amjad", "Anas", "Habib"];
console.log("Good news! I have found a bigger table");
GuestList.unshift("Sarah");
let middleInd = Math.floor(GuestList.length / 2);
GuestList.splice(middleInd, 0, "Aman");
GuestList.push("Areeb");
GuestList.forEach(allGuest => {
    console.log(`Assalam o Alaikum ${allGuest} you are invited in dinner.`)
})

