   
        /*************     voilà trois methodes pour trouver à la fois le min et le max d'un tableau  ********** **/


   
                                        /*************     array declaration  ************ **/


//const tab = [1];
//const tab = [1, 2, 3, 4, 5];
const tab = [2334454, 5];


                                          /*************     while LOOP ************ **/
  /*function minMax(arr) {
 
    var x = arr.length;
    min = arr[x-1];
    max = arr[x-1];
    while (x--){
        if(arr[x] < min){
            min = arr[x];

        }
        else if (arr[x] > max){
            max = arr[x];
            
        }
    }
    return  "[ " + min + ',' + max + " ]";
  
}*/



                                          /*************     Math.min and Max.min ************ **/


function minMax(arr) {
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}



                                          /*************     FOR LOOP ************ **/

/*function minMax(arr) {
    min =  arr[0];
    max =arr[0];
    
    for(i = 0; i < arr.length; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
        if (max < arr[i])
        {
            max = arr[i];
        }

    }
    return "["+ min +", "+ max +"]";
}*/
    
     console.log(minMax(tab));
