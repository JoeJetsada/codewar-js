
let temperatureList = [85, 75, 77, 212, 84, 91]
const celsius = []
for(let i = 0 ;i< temperatureList.length;i++){
    celsius.push(((temperatureList[i] - 32) / 1.8).toFixed(2))
    
}
console.log(celsius)