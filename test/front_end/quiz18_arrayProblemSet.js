// problem 1
console.log("Problem 1: printReverse()");
// function printReverse(arr){
//     var newArr = arr.forEach(function(item,i,arr){
//         item = arr[arr.length - i - 1];
//         console.log(item);
//     });
//     return newArr;
// }
function printReverse(arr){
    for(var i = arr.length -1; i>= 0; i--){
        console.log(arr[i]);
    }
}

printReverse([1,2,3,4]);
printReverse(["a","b","c"]);

// problem 2
console.log("Problem 2: isUniform()");
// function isUniform(arr){
//     var i = 0;
//     while(i<arr.length-1){
//         if(arr[i] !== arr[i+1]){
//             console.log(false) 
//             return false;
//         }
//         i++; 
//     }
//     console.log(true);
//     return true;
//     }
function isUniform(arr){
    var first = arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}
console.log("isUniform([1,1,1,1,1])");
isUniform([1,1,1,1,1]);

isUniform(["a","b","p"]);

//problem3
console.log("Problem 3:sumArray()");
function sumArray(arr){
    var sum = 0;
    arr.forEach(function(item){
        sum += item;
    })
    console.log(sum);
    return sum;
}

console.log("sumArray([1,2,3])");
sumArray([1,2,3]);
console.log("sumArray([10,3,10,4])");
sumArray([10,3,10,4]);

//problem 4
console.log("Problem 4:max()");
function max(arr){
    var bigger = arr[0];
    for(var i=1; i<arr.length;i++){ 
        if(bigger < arr[i]){
            bigger = arr[i];
        }
    }
    console.log(bigger);
    return bigger;
}

max([1,2,4,0,8,3]);