function ChangeArray(arrayOfNumbers) {
    let lengthArray = arrayOfNumbers.length;
    let changedArray = [];
    if (lengthArray === 1)
        changedArray = arrayOfNumbers;
    else if ((lengthArray % 2 === 0) && (lengthArray > 1)) {
        for (let i = lengthArray / 2; i < lengthArray; i++)
            changedArray.push(arrayOfNumbers[i]);
        for (let i = 0; i < lengthArray / 2; i++)
            changedArray.push(arrayOfNumbers[i]);
    }
    else if ((lengthArray % 2 === 1) && (lengthArray > 1)) {
        for (let i = Math.ceil(lengthArray / 2); i < lengthArray; i++)
            changedArray.push(arrayOfNumbers[i]);
        changedArray.push(Math.ceil(lengthArray / 2));
        for (let i = 0; i < Math.floor(lengthArray / 2); i++)
            changedArray.push(arrayOfNumbers[i]);
    }

    return changedArray;
}


let result4 = ChangeArray([1]);
console.log(result4);
let result3 = ChangeArray([1, 2, 3, 4, 5]);
console.log(result3);
let result = ChangeArray([1, 2]);
console.log(result);
let result2 = ChangeArray([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(result2);