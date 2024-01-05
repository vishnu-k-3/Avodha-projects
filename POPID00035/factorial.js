const n = 1;
let fact = 1;

if(n == 0 || n == 1){
    console.log("1")
}else if(n < 0){
    console.log("error")
}else{
    for(let i = 1; i <= n; i++){
    fact *= i;
};
console.log(fact)
};

