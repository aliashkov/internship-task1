function insertFirstLettersFromWords(string){
   let newString = [];
   string.split(' ').filter(( char, index ) => newString[index] = char[0]);
   return newString;
}


let result = insertFirstLettersFromWords('Каждый охотник желает знать где сидит фазан');
console.log(result);

