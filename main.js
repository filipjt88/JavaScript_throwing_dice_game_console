// Players
// Cubes
// Round
// Players score
// Result


let player1 = prompt("Player 1");
let player2 = prompt("Player 2");

let player1TotalScore = 0;
let player2TotalScore = 0;

let round = 0;


function throwingDice() {
    round++;
    console.log(`%c * * * Round ${round} * * *`,`color:red`);

    let cubeOne = Math.floor(Math.random() * 5 + 1);
    let cubeTwo = Math.floor(Math.random() * 5 + 1);

    player1TotalScore += cubeOne;
    player2TotalScore += cubeTwo;

    console.log(`${player1} ${cubeOne} : ${cubeTwo}  ${player2}  (${player1TotalScore} : ${player2TotalScore})`);

    if(round < 10) {
        setTimeout(throwingDice,2000);
    } else {
        checkWinner();
    }
}


throwingDice();

function checkWinner() {
    if(player1TotalScore > player2TotalScore) {
        console.log(`%c * * * Winner is  ${player1} * * *`,`color: green`);
    } else if(player1TotalScore < player2TotalScore) {
        console.log(`%c * * * Winner is  ${player2} * * *`,`color:green`);
    } else {
        console.log(`%c * * * No winner * * * `,`color:yellow`);
    }
}

