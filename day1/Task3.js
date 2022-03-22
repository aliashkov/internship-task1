function ChangeArray(arrayOfNumbers) {
    let middle = Math.ceil(arrayOfNumbers.length / 2) - 1;

    if (arrayOfNumbers.length % 2 != 0)
        return arrayOfNumbers.slice(middle + 1).concat(arrayOfNumbers[middle], arrayOfNumbers.slice(0, middle));
    else 
        return arrayOfNumbers.slice(middle + 1).concat(arrayOfNumbers.slice(0, middle + 1));
}


let result4 = ChangeArray([1]);
console.log(result4);
let result3 = ChangeArray([1, 2, 3, 4, 5]);
console.log(result3);
let result = ChangeArray([1, 2]);
console.log(result);
let result2 = ChangeArray([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(result2);
