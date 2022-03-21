function arrayFirstLettersFromWords(string){
   return string.split(' ').map( item => item[0]);
}

let result = arrayFirstLettersFromWords('Каждый охотник желает знать где сидит фазан');
console.log(result);
