function find(arr, element) {
    return arr.indexOf(element);
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const elementToFind = 4;
  
  const index = find(myArray, elementToFind);
  
  if (index !== -1) {
    console.log(`${elementToFind} found at index ${index}`);
  } else {
    console.log(`${elementToFind} not found`);
  }