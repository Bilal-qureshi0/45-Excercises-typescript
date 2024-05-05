function makeSandwiches(...items: string[]){
    for(let i = 0; i < items.length; i++){
        console.log(`Your items for sandwich is ${items[i]}`);
    };
   
};


makeSandwiches("Mayo","Ketchup","Beef");
makeSandwiches("Lettuce","Cucumber");