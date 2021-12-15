//const tab = [1, 2, "aasf", "1", "123", 123];
//const tab = [1, 2, "a", "b"];
const tab = [1, "a", "b", 0, 15];

function filterArray(arr) {
   var arr1 = new Array();
for ( let i = 0 ; i<arr.length; i++)
{

   if (typeof(arr[i]) === 'number')
   {
      arr1[i] = arr[i];
     
   }
   
}

function Joes_remove(someArray) {
    var newArray = [];
    var element;
    for( element in someArray){
        if(someArray[element]!=undefined ) {
            newArray.push(someArray[element]);
        }
    }
    return newArray;
}
return(Joes_remove(arr1));

}

console.log(filterArray(tab));
document.write(filterArray(tab));
 
