function cloneObj(obj) {
    return Object.assign({}, obj);
  }
  
  const originalObject = { a: 1, b: 2, c: 3 };
  const clonedObject = cloneObj(originalObject);
  
  console.log(clonedObject);