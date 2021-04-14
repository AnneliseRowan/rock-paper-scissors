var wins = 0; 
var losses = 0; 
var ties = 0; 

var options = ["r", "p", "s"]; 


var playGame = function() {
    
    var userChoice = window.prompt("r, p, or s?");
    
    if (!userChoice) {
        return; 
    }
    
    if (userChoice !== "r" && userChoice !== "s" && userChoice !== "p") {
        window.alert("Please choose r, p, or s");
       playGame(); 
    }
    

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index]; 

    window.alert(`The computer chose ${computerChoice}`)

    if (userChoice === computerChoice) {
        ties++
    } else if (
        (userChoice === "r" && computerChoice === "s") || 
        (userChoice === "s" && computerChoice === "p") || 
        (userChoice === "p" && computerChoice === "r") 
    ) {
        wins++;
        window.alert("You Win!!!!!!!!!")
    } else {
        losses++;
        window.alert("You Lose :(")
    }

    window.alert(`Stats: \n Wins: ${wins} \n Losses: ${losses} \n Ties: ${ties}`);

    var playAgain = window.confirm("Play Again?");

    if(playAgain) {
        playGame();
    }

}

playGame(); 


