function getCount(str){

    return (str.match(/[aeiou]/gi)||[]).length
}
let result = getCount("jetsada");
console.log(result)


