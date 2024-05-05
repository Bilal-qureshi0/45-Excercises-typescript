var username = ["Areeb", "Zayan", "Admin", "Sarah", "Shayan"];
username.forEach(function (username) {
    if (username === 'Admin') {
        console.log("Assalam o Alaikum, would you like to see today's report?");
    }
    else {
        console.log("Assalam o Alaikum, ".concat(username, " welcome to the office."));
    }
});
