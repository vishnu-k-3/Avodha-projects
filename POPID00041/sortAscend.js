function sort(arr) {
    return arr.slice().sort(function(a, b) {
      return a - b;
    });
  }
  
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArray = sort(unsortedArray);
  
  console.log(sortedArray);