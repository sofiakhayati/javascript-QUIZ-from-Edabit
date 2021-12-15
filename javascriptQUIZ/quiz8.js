/*const tab = [
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ];*/
  const tab = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];
  
   function getBudgets(arr) {
     sum = 0;
      for (i = 0; i<arr.length; i++)
      {
        sum += arr[i].budget;
      }
  
      return sum;
  
  }
  console.log(getBudgets(tab));
  