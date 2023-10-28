// Interactive Game

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("Enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

            // computer random choice
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";

            //game logic
            let result = 
                playerOne === computer ? 
                `Player One: ${playerOne}\nComputer: ${computer}\nTie game!` 
                : playerOne === "rock" && computer === "paper" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins!` 
                : playerOne === "scissors" && computer === "rock" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `Player One: ${playerOne}\nComputer: ${computer}\nPlayer One wins!`

            //result and play again
            alert(result);
            let playAgain = confirm("Play Again?")
            playAgain ? location.reload() : alert("Okay, thanks for playing!")

        //quittings        
        } else {
            alert("You didn't enter rock, paper, or scissors.")
        }
    } else {
        alert("No choice? Okay, maybe next time.")
    }
} else {
    alert("Okay, maybe next time.");
}