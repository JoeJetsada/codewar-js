function order(words){
    for(let i = 0; i < words.length ; i++){
    words[i].match(/[123456789]/g)
    console.log(words[i].match(/[123456789]/g))
    }
    words.sort((a,b)=> b-a);

console.log(words)
}
let sad = order(["kouug5pp","aokoe8","kos3sf"]);