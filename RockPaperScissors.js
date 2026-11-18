// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"

const rps = (p1, p2) => (p1 === p2) ? "Draw!" : ((p1==="rock" && p2==="scissors"||p1==="paper" && p2==="rock"||p1==="scissors" && p2==="paper") ? "Player 1 won!" : "Player 2 won!");
console.log(rps("rock","scissors"));

/////////////
const rpssp = (p1, p2) => (p1 === p2) ? "Draw!" : `Player ${/rockscissors|paperrock|scissorspaper/.test(p1+p2) ?1:2} won!` ;
console.log(rpssp("rock","paper"));