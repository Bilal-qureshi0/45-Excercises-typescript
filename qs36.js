function make_Shirt(size, msg) {
    if (size === void 0) { size = 'large'; }
    if (msg === void 0) { msg = 'I love typescript.'; }
    return "Size of Shirt: ".concat(size, ", Message: ").concat(msg);
}
;
var largeShirt = make_Shirt();
var mediumShirt = make_Shirt('Medium');
var customShirt = make_Shirt('Small', 'Free Palestine');
console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);
