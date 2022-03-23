function insertFirstLettersFromWords(string){
   let newString = string.split(' ').map( item => item[0]);
   return newString.filter(word => word.length > 0);
}


let result = insertFirstLettersFromWords('Каждый охотник желает знать где сидит фазан');
console.log(result);

