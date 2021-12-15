/*const obj1 = {
    likes: 2,
    dislikes: 3,
    followers: 10
  };*/
  const obj1 = {
    D: 1,
    B: 2,
    C: 3
  };

  function objectToArray(obj) {
     
  const newarr = Object.entries(obj);
  
  return newarr;
  }
  console.log(objectToArray(obj1));
   
  