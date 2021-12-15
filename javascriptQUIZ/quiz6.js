/*const  printcolor = {
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
  };*/
 /* const printcolor = {
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  };*/
  const printcolor = {
    "cyan": 432,
    "magenta": 543,
    "yellow": 777
  };
  
   function inkLevels(inks) {
  
  const x = Object.values(inks);
  
  let min = x[0];
  for (i = 0; i < x.length; i++)
  {
     if (x[i]<min)
     {
        min = x[i];
     }
  }
  return min;
     }
   console.log(inkLevels(printcolor));
  