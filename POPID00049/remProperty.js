function removeProp(obj, propertyName) {
    if (obj.hasOwnProperty(propertyName)) {
      delete obj[propertyName];
    }
  }
  
  const myObject = { a: 1, b: 2, c: 3 };
  const propertyToRemove = 'a';
  
  removeProp(myObject, propertyToRemove);
  console.log(myObject);