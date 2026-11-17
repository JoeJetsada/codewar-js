var summation = function (num) {
    let total = 0;
    
    for(let i = 1; i < num+1; i++){
        total = total+i;
    }
    let addition ="1"
    for(let i = 2; i < num+1; i++){
        addition = `${addition}+${i}`
    }
    return `${total} (${addition})`
  
}

let result = summation(1);
console.log(result);
///////////////////////////////////
 const summationsp = (num) => num*(num+1)/2;

 console.log(summationsp(10));