 findSmallestInt = (arr) => {
    let arrmin = arr[0]
    for(let i = 1;i < arr.length; i++){
        if(arrmin > arr[i]){
            arrmin =  arr[i];
        }else{
            arrmin = arrmin;
        }

    }
    return arrmin;
 } 

let result = findSmallestInt([8,9,7,3,5,2,41]);
console.log(result);

// ----------------------------------------------------
findSmallestIntsp = (arr) =>{
   return Math.min(...arr)
   
}
let result2 = findSmallestIntsp([8,9,7,3,5,2,41]);
console.log(result2);