// create a function that randomly picks 'Rock', 'Paper', or 'Scissors'
//start with making a variable be a number from 1-3 randomly
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) {
        return 'Rock';
    }else if(choice == 1) {
        return 'Paper';
    }else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Paper') {
        return "It's a Tie!";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        return "You Win! Scissors beats Paper";
    }

    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock') {
        return "It's a Tie!";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        return "You Lose! Rock beats Scissors";
    }

    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Scissors') {
        return "It's a Tie!";
    }
}


function game() {
    let playersChoice;
    for(let i = 0; i < 5; i++) {
        playersChoice = prompt("Pick 'Rock', 'Paper', or 'Scissors': ")
        console.log(playRound(playersChoice, getComputerChoice()));
    }
}