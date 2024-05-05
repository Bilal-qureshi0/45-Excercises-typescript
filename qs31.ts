let currentUsername = ["Ali","Zayan","Sarah","Bilal","Sana"];
let newUsers  = ["Sabir","Ali","Azeem","Adil","Sarah"];
function uniqueUsername(currentUsername: string[], newUsers: string[]):void{
    const lowerCasecurrentUsername = currentUsername.map(user => user.toLowerCase());
    for(const newUser of newUsers){
        const lowerCasenewUser = newUser.toLowerCase();
        if(lowerCasecurrentUsername.includes(lowerCasenewUser)){
            console.log(`Username "${newUsers}" is already taken. Please select a different username.`);
        }
        else{
            
            console.log(`Username "${newUsers}" is available.`);
            
        }
    }

}