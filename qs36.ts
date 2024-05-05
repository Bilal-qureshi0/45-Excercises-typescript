function make_Shirt(size = 'large', msg= 'I love typescript.'){
    
        return `Size of Shirt: ${size}, Message: ${msg}`
        
    
};

const largeShirt = make_Shirt();
const mediumShirt = make_Shirt('Medium');
const customShirt = make_Shirt('Small', 'Free Palestine.');

console.log(largeShirt);
console.log(mediumShirt);
console.log(customShirt);


