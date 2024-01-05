function objLength(obj) {
    return Object.keys(obj).length;
  }
  
  const myObject = { a: 1, b: 2, c: 3 };
  
  const length = objLength(myObject);
  console.log(`length: ${length}`);