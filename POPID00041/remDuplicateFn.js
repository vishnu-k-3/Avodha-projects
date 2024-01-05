let arr1 = ["vishnu", 3, "ks", 7];
let arr2 = ["vishnu", 3, "ks", 6];

function dupli() {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}

dupli();
