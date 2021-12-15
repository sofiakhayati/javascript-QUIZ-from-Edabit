//const tab = [2, -1, 4, 8, 10];
//const tab = [-3, -4, -10, -2, -3];
//const tab = [2, 4, 6, 8, 10];
const tab = [-1];
 function getAbsSum(arr) {
    sum1 = 0;
    sum2 = 0;
    for (i = 0; i <arr.length; i++)
    {
        
        if (arr[i] >= 0)
        {
            sum1 += arr[i];
        }
        if (arr[i] < 0)
        {
            sum2 += -1 * arr[i];
        }
        
    }
    return sum1 + sum2;
    
}
console.log(getAbsSum(tab));
