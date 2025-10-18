function getComputerChoice(){
    const randomNumber = Math.random();

    if(randomNumber < 1 / 3){
        return "rock";
    } else if(randomNumber < 2 / 3){
        return "paper";
    } else{
        return "scissors";
    }
}

function getHumanChoice(){
    const humanChoice = prompt("Enter rock, paper or scissors!");
    return humanChoice.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice === computerChoice){
            console.log(`It's a tie. They both picked ${humanChoice}!`);
        } else if((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore++;
            console.log(`You are win!!! ${humanChoice} win as ${computerChoice}!!!`);
        } else{
            computerScore++;
            console.log(`You are lose!!! ${computerChoice} win as ${humanChoice}!!!`);
        }

        console.log(`Score: Human — ${humanScore}, Computer — ${computerScore}`);
    }

    for(let i = 1; i <= 5; i++){
        console.log(`\Round ${i}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("\n=== GAME OVER ===");
    if (humanScore > computerScore) {
        console.log(`🎉 You are win with score ${humanScore} vs ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`😢 You are losse!!! Computer win with score ${computerScore} vs ${humanScore}.`);
    } else {
        console.log(`🤝 It's a tie! Score ${humanScore} : ${computerScore}.`);
    }
}

playGame();