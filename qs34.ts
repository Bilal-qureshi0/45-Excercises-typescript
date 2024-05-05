let animal = ["Leopard","Lion","Cheetah"];
for(let i = 0; i<animal.length; i++){
    console.log(animal[i]);
};
 for(let animals of animal){
    if(animals === 'Leopard'){
        console.log(`${animals}s has black spots on them.`);
    }else if(animals === 'Lion'){
        console.log(`${animals}s are called as king of Jungle.`);
    } else if(animals === 'Cheetah'){
        console.log(`${animals}s are fastest land animal.`);
    }
 }

 console.log("All three of them hunt there prey and have sharp teeths and large paws.");
 
    
 