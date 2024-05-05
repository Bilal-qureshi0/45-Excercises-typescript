function describeCity(City, Country) {
    if (Country === void 0) { Country = 'Pakistan'; }
    console.log("".concat(City, " is in ").concat(Country, "."));
}
;
describeCity('Karachi');
describeCity('Lahore');
describeCity('Dubai', 'UAE');
