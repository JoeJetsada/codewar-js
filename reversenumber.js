const reverseSeq = n => { 
    let number = []
    for(let i = n; i > 0 ;i--){
        number.push(i)
    }
  return number;
};

// const reverseSeq = n => { 
// return Array.from({ length: n }, (_, i) => n - i);
// };

console.log(reverseSeq(10));