const arr = [1,1,1,2,1,1,3];
let result = 0;

function sum(arr){
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    };
    return result;
};

console.log(sum(arr));