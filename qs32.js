var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinalNum;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    if (num === 1) {
        ordinalNum = 'st';
    }
    else if (num === 2) {
        ordinalNum = 'nd';
    }
    else if (num === 3) {
        ordinalNum = 'rd';
    }
    else {
        ordinalNum = 'th';
    }
    console.log("".concat(num).concat(ordinalNum));
}
