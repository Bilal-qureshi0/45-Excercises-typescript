var magicians = [
    { name: "Harry Potter" },
    { name: "Saira" },
    { name: "Jerry" }
];
function make_great(magicians) {
    magicians.forEach(function (magician) {
        magician.name = "The Great  \"".concat(magician.name, "\"");
    });
}
function showMagician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician.name);
    });
}
;
make_great(magicians);
showMagician(magicians);
