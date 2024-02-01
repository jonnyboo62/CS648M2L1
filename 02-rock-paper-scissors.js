var computerNumber = Math.floor(Math.random()*3);
var computerChoice;

if (computerNumber == 0) {
    computerChoice = "rock";
} else if (computerNumber == 1) {
    computerChoice = "paper";
} else if (computerNumber == 2) {
    computerChoice = "scissors";
}

var humanChoice = window.prompt("Rock, Paper, Scissors!").toLowerCase();

if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
    window.alert("Invalid choice.");
} else{
    var winner;

    if (humanChoice == computerChoice) {
        winner = "tie"
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        winner = "computer"
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        winner = "human"
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        winner = "human"
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        winner = "computer"
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        winner = "computer"
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        winner = "human"
    }

    if (winner == "tie") {
        window.console.log("It's a tie! You both chose " + computerChoice + ".");
    } else if (winner == "human") {
        window.console.log("You won! You chose " + humanChoice + " and it chose " + computerChoice + ".");
    } else if (winner == "computer") {
        window.console.log("The computer won! You chose " + humanChoice + " and it chose " + computerChoice + ".");
    }

}