function large(arr){
    let max = arr[0];

    for(i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];    
        };
    };
    return max;
};

const ar = [2,4,8,6,7]
console.log(large(ar))