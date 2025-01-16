let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    const value = choices[Math.floor(Math.random() * choices.length)];
    return value.toLowerCase();
}

function getHumanChoice() {
    let choice = prompt("> ");
    return choice.toLowerCase();
}

function playRound(playerChoice,computerChoice) {
    if(playerChoice === computerChoice) {
        console.log("It's a tie!");
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
        ) {
        humanScore++;
        return 'You win!';
        } 
    else {
        computerScore++;
        return 'You lose!';
        }
}

function playGame(){
    for(let i =0 ; i< 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You played ${humanSelection} and Computer played ${computerSelection}`)
        playRound(humanSelection, computerSelection);        
    }
    console.log(`You: ${humanScore} vs Computer: ${computerScore}`)
}

playGame();

