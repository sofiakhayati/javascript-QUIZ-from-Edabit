/*const obj = {
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }*/
  const obj = {
    "Genie" : 1000,
    "Joe" : 40
  };
  
  function afterNYears(names, n) {
     
  
    
     for (element of Object.keys(names))
     {
        if (n >= 0)
        {
           names [element] = names [element] + n;
           
          
          
        }
        else
        {
           names [element] = names [element] - n;
        }
        
     }
    
     return names;
    
  }
  
  //console.log(afterNYears(obj, 10));
  console.log(afterNYears(obj, -86));
  