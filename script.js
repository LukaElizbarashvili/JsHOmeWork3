// Task one
let array1 = [10, 50, 6, 7, 8, 11, 6, 3, 9];
let sum = 0;
for (let element of array1){
    sum +=element;
}
console.log(sum);

// Task two

// Task three
function getMax(first,second,third) {
    return Math.max(first, second,third)
}

let Max = getMax(15, 100, 1)
console.log(Max);


// Task Four
function checkNumber(number) {
    let typeOfNumber = number % 2 == 0 ? 'this number is even' : 'this number is odd';
    return typeOfNumber;
}
let numberAnswer = checkNumber(6);
console.log(numberAnswer);

// Task Five
let array2 = [1,2,3,4,5]
for (let index = array2.length; index > 0; index--) {
    const element = array2[index]; 
    console.log(element);
     
}
