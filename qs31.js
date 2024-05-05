var currentUsername = ["Ali", "Zayan", "Sarah", "Bilal", "Sana"];
var newUsers = ["Sabir", "Ali", "Azeem", "Adil", "Sarah"];
function uniqueUsername(currentUsername, newUsers) {
    var lowerCasecurrentUsername = currentUsername.map(function (user) { return user.toLowerCase(); });
    for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
        var newUser = newUsers_1[_i];
        var lowerCasenewUser = newUser.toLowerCase();
        if (lowerCasecurrentUsername.includes(lowerCasenewUser)) {
            console.log("Username \"".concat(newUsers, "\" is already taken. Please select a different username."));
        }
        else {
            console.log("Username \"".concat(newUsers, "\" is available."));
        }
    }
}
