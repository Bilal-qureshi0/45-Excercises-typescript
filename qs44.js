function makeCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car.options[key] = option[key];
        }
    }
    return car;
}
var car1 = makeCar('Toyota', 'Corolla', { color: 'blue' }, { sunroof: true });
var car2 = makeCar('Suzuki', 'Hijet', { color: 'red' });
console.log(car1, car2);
