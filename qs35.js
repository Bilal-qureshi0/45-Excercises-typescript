function makeShirt(size, msg) {
    console.log("Size of shirt ".concat(size, "\n").concat(msg));
    return { makeShirt: makeShirt };
}
makeShirt(32, 'Free Palestine');
