function random(lim1, lim2){
    let result = Math.floor(Math.random() * (lim2 - lim1 + 1) + lim1);
    return result;
};

console.log(random(3, 9));