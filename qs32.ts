let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let ordinalNum;
  for(let num of numbers){
    if (num === 1){
        ordinalNum = 'st'
    } else if (num === 2){
        ordinalNum = 'nd'
    } else if (num === 3){
        ordinalNum = 'rd'
    } else {
        ordinalNum = 'th'
    }
    console.log(`${num}${ordinalNum}`);
    
  }