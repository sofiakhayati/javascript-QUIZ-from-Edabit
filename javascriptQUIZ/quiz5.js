//const tab = [];
//const tab = [false, false, false, false];
const tab = [true, false, false, true, false];

 function countTrue(arr)
 {
    var j = 0;
     for (i = 0; i< arr.length; i++)
     {
        if ( arr[i] === true)
        {
           j = j+1;
        }

     }
     return (j);
 } 
 console.log(countTrue(tab));
