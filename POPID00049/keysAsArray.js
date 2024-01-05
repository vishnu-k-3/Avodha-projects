function getKeys(obj) {
    return Object.keys(obj);
  }
  
  const myObject = { a: 1, b: 2, c: 3 };
  
  const keysArray = getKeys(myObject);
  console.log(keysArray); 