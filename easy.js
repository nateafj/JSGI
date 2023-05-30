const nArray = [1 ,2,5,10]
function arrayAverage(arr){
    let sum = 0;
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}


console.log(arrayAverage(nArray))