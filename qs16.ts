let GuestList = ["Sarah", "Amjad", "Aman", "Anas", "Habib", "Areeb"];
console.log("Sorry! I can invite only two people for dinner.");
while(GuestList.length > 2){
    let removeGuest = GuestList.pop();
    console.log(`Sorry ${removeGuest}, you are not invited to Dinner.`)
}

GuestList.forEach(guest => {
    console.log(`Dear ${guest} you are still invited to Dinner.`)

})

GuestList.splice(0, GuestList.length);
console.log(GuestList)


