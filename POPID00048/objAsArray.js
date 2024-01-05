function objValues(obj) {
    return Object.values(obj);
  }
  
  const myObject = { a: "hello", b: 2, c: 3 };
  
  const valuesArray = objValues(myObject);
  console.log(valuesArray);