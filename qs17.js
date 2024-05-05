var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countries = ["Paris", "Belgium", "Japan", "Saudia", "America"];
console.log(countries);
console.log("Alphabetical order:", __spreadArray([], countries, true).sort());
console.log(countries);
console.log("Reverse Alphabetical order:", __spreadArray([], countries, true).sort().reverse());
console.log(countries);
countries.reverse();
console.log("Order of array has been changed:", countries);
countries.reverse();
console.log("Back to original order:", countries);
countries.sort();
console.log("Array in alphabetical order:", countries);
countries.sort(function (a, b) { return b.localeCompare(a); });
console.log("Array in reverse alphabetical order:", countries);
