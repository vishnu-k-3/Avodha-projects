function mergeObj(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  const object1 = { a: 1, b: "hi" };
  const object2 = { c: "hello", d: 4 };
  
  const mergedObject = mergeObj(object1, object2);
  console.log(mergedObject);