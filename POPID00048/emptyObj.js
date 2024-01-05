function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  const emptyObject = {};
  const nonEmptyObject = { a: 1, b: 2};
  
  console.log(isEmpty(emptyObject));
  console.log(isEmpty(nonEmptyObject));