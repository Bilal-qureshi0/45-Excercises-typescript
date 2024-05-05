var myName = "bilal Qureshi";
console.log("Lowercase:", myName.toLowerCase());
console.log("Uppercase:", myName.toUpperCase());
console.log("Title Case: ", myName.toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
