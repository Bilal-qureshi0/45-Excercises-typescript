//let cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Gujranwala","Hyderabad", "Larkana"];
// console.log(cities);
var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Gujranwala", "Hyderabad", "Larkana"];
var cityObjects = [];
// Create objects for each city
cities.forEach(function (city) {
    var cityObject = {
        name: city,
        population: null, // You can add population data here if available
        // Add more properties as needed
    };
    cityObjects.push(cityObject);
});
// Print the array of city objects
console.log(cityObjects);
