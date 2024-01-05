function getValues(obj, propertyName) {
    const valuesArray = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && key === propertyName) {
        valuesArray.push(obj[key]);
      }
    }
  
    return valuesArray;
  }
  
  
  const myObject = { a: 1, b: 2, c: 3, b: 4 };
  const propertyToRetrieve = 'b';
  
  const valuesArray = getValues(myObject, propertyToRetrieve);
  console.log(valuesArray); 