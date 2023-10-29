let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    while (playGame) {
    const playerChoice = prompt("Rock, Paper, Scissors");
    if (playerChoice || playerChoice === "") {
        const playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" ||
            playerOne === "paper" || 
            playerOne === "scissors"
        ) {
            const computerChoice = Math.floor(Math.random() * 3);
            const rpsArray = ["rock", "paper", "scissors"];
            const computer = rpsArray[computerChoice];
            
            const result = 
                playerOne === computer ? 
                `Player One: ${playerOne}\nComputer: ${computer}\nTie game!` 
                : playerOne === "rock" && computer === "paper" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins!` 
                : playerOne === "scissors" && computer === "rock" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `Player One: ${playerOne}\nComputer: ${computer}\nPlayer One wins!`
            alert(result);
            playGame = confirm("Play Again?");
            if (!playGame) alert("Thanks for playing!");
            continue;
        } else {
            alert("You didn't enter rock, paper, or scissors.");
            continue;
        }
    } else {
        alert("No choice? Okay, maybe next time.");
        break;
    }
    }
} else {
    alert("Okay, maybe next time.");
}


