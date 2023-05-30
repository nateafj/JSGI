'strict';

//1
//write a function that takes that takes 2 numbers and returns the sum

// function numSum(x,y){
//    sum = (x + y)
//    return sum
// }
// console.log(numSum(1,2) + numSum(3,5))

//write a program that takes an array of intergers and doubles each element in the array
//if the interger is a multiple of 6, then triple the element return a new array


//with variable
var oldArray = [1, 2, 3, 6, 12, 15];
function doubleAndTriple(arr){
newArray = []
for (var i = 0; i < arr.length; i++){
    let num = arr[i];
    if (num % 6 === 0 ){
        newArray.push(num * 3);
    }else{
        newArray.push(num * 2)
    }
    }
    return newArray
}
console.log(doubleAndTriple(oldArray));

//without the variable
var oldArray2 = [1,2,3,6,12,15];
function dAndT(rayz){
    newArray2 =[]
    for (var i = 0; i < rayz.length; i++){
        if(rayz[i] % 6 === 0){
            newArray2.push(rayz[i] * 3);
        }else{
            newArray2.push(rayz[i] * 2)
        }
    }
    return newArray2
}

console.log(dAndT(oldArray2))