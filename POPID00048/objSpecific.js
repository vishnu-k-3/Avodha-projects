function property(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
  }
  
  const myObject = { a: 1, b: 2, c: 3 };
  const propertyToCheck = 'd';
  
  if (property(myObject, propertyToCheck)) {
    console.log(`Object contains property ${propertyToCheck}`);
  } else {
    console.log(`Object does not contain property ${propertyToCheck}`);
  }