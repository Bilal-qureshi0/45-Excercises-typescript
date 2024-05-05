interface Magician{
    name: string
}
let magicians: {name: string} [] = [
    {name: "Harry Potter"},
    {name: "Saira"},
    {name: "Jerry"}
];
function make_great(magicians: Magician[]) {
    magicians.forEach(magician => {
        magician.name = `The Great  "${magician.name}"`;
    });
}
function showMagician (magicians: Magician[]){
magicians.forEach(magician => {
    console.log(magician.name);
    
})};
make_great(magicians)
showMagician(magicians)
