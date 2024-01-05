
function find(check){
    if(check === 0){
        return "zero"
    }else if(check > 0){
        return "positive"
    }else if(check < 0){
        return "negative"
    }else{
        return "not a number"
    };
};

console.log(find(0))



