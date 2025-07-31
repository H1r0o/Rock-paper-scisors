// let button = document.getElementById("button");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
let playerChoiceText = document.getElementById("playerChoice");
let playerScoreText = document.getElementById("playerScore");
let computerChoiceText = document.getElementById("computerChoice");
let computerScoreText = document.getElementById("computerScore");
let whoWin = document.getElementById("whoWin");
let gameOver = false;
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!gameOver) {
            let buttonText = button.innerText.toLocaleUpperCase();
            let computer = computerChoice();
            gameRound(buttonText, computer);

            if (playerScore >= 5 || computerScore >= 5) {
                gameOver = true;
                whoWin.innerText = playerScore > computerScore ? "🎉 Player wins the game!" : "💻 Computer wins the game!";
                rockBtn.innerText = "Reset?";
                paperBtn.innerText = "Reset?";
                scissorsBtn.innerText = "Reset?";
            }
        } else {
            resetGame();
        }
    })
})

// button.addEventListener("click", () => {

//     if (!gameOver) {
//         const playerCh = playerChoice();
//         const computerCh = computerChoice();
//         gameRound(playerCh, computerCh);

//         if (playerScore >= 5 || computerScore >= 5) {
//             gameOver = true;
//             button.innerText = "Restart Game";
//             whoWin.innerText = playerScore > computerScore ? "🎉 Player wins the game!" : "💻 Computer wins the game!";
//         }
//     }
//     else {
//         resetGame();
//     }
// });

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
    playerChoiceText.innerText = "ROCK";
    computerChoiceText.innerText = "PAPER";
    whoWin.innerText = "Whos gona win?";
    rockBtn.innerText = "Rock";
    paperBtn.innerText = "Paper";
    scissorsBtn.innerText = "Scissors";
}

function computerChoice() {
    let random = Math.floor(Math.random() * 3 + 1);
    let computer;
    if (random === 3) {
        computer = "ROCK";
    } else if (random === 2) {
        computer = "PAPER";
    } else if (random === 1) {
        computer = "SCISSORS"
    }
    return computer;
}


function playerChoice() {
    let player = prompt("Your choice").toLocaleUpperCase();
    while (player !== "ROCK" && player !== "PAPER" && player !== "SCISSORS") {
        player = prompt("Pick Rock, Paper or Scissors").toLocaleUpperCase();
    }
    return player;


}

function gameRound(player, computer) {
    playerChoiceText.innerText = player;
    computerChoiceText.innerText = computer;
    if (player === computer) {
        whoWin.innerText = "TIE";
    } else if (player === "ROCK" && computer === "PAPER" || player === "PAPER" && computer === "SCISSORS" || player === "SCISSORS" && computer === "ROCK") {
        whoWin.innerText = "Computer Win";
        computerScore += 1;
        computerScoreText.innerText = computerScore;
    } else if (player === "ROCK" && computer === "SCISSORS" || player === "PAPER" && computer === "ROCK" || player === "SCISSORS" && computer === "PAPER") {
        whoWin.innerText = "Player Win";
        playerScore += 1;
        playerScoreText.innerText = playerScore;
    }
    console.log(`Player :${player}`);
    console.log(`Computer ${computer}`)
}

