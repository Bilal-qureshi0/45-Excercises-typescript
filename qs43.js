function makeSandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    for (var i = 0; i < items.length; i++) {
        console.log("Your items for sandwich are ".concat(items[i]));
    }
    ;
    console.log("Enjoy your Sandwich");
}
;
makeSandwiches("Mayo", "Ketchup", "Beef");
makeSandwiches("Lettuce", "Cucumber");
