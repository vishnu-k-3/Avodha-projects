let result= [];

function rev(str){
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i]
    };
    return result;
};

const res = "emoclew";
console.log(rev(res));