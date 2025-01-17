let humanScore = 0;
let computerScore = 0;
let humanSelection; // Declare globally

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

const buttonList = document.querySelectorAll("button");

buttonList.forEach((button) => {
    button.addEventListener("click", () => {
        getHumanChoice(button);
    });
});

function getHumanChoice(button) {
    humanSelection = button.getAttribute("id").toLowerCase(); // Set the global choice
    console.log(`Human selection: ${humanSelection}`);
    playGame(); // Play the game immediately
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        showResult("Tie!");
        return; // Avoid further checks if it's a tie
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        showResult("You Win!");
    } else {
        computerScore++;
        showResult("You Lose!");
    }
}

function playGame() {
    const computerSelection = getComputerChoice();
    console.log(
        `You played ${humanSelection} and Computer played ${computerSelection}`
    );
    playRound(humanSelection, computerSelection);
}

function showResult(text) {
    const result = document.createElement("div");
    result.textContent = `${text} (Human: ${humanScore}, Computer: ${computerScore})`;
    result.setAttribute("style", "color: blue; background: pink; margin: 10px;");
    document.querySelector("body").appendChild(result);
}