// create a function that randomly picks 'Rock', 'Paper', or 'Scissors'
//start with making a variable be a number from 1-3 randomly
const div2 = document.querySelector(".player");
const div3 = document.querySelector(".cpu");
let playerCount = 0;
let cpuCount = 0;
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
    playerSelection = String(playerSelection);

    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        cpuCount += 1;
        div3.innerHTML = `${cpuCount}`;
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Paper') {
        return "It's a Tie!";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        playerCount += 1;
        div2.innerHTML = `${playerCount}`;
        return "You Win! Scissors beats Paper";
    }

    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock') {
        return "It's a Tie!";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        playerCount += 1;
        div2.innerHTML = `${playerCount}`;
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        cpuCount += 1;
        div3.innerHTML = `${cpuCount}`;
        return "You Lose! Rock beats Scissors";
    }

    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
        playerCount += 1;
        div2.innerHTML = `${playerCount}`;
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        cpuCount += 1;
        div3.innerHTML = `${cpuCount}`;
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Scissors') {
        return "It's a Tie!";
    }
}

const buttons = document.querySelectorAll("button");
const div = document.querySelector(".text")
buttons.forEach(button => button.addEventListener('click', (e) => {
    const random = getComputerChoice();
    div.innerText = playRound(e.target.className, random);
    if(playerCount == 5){
        /*div.innerText = "You Winnnnnnnn!!!!!!!!!!!! Feel free to play again!";*/
        alert("You Winnnnnnnn!!!!!!!!!!!! Feel free to play again!");
        div.innerText = "Welcome to my Rock Paper Scissors Game. You will be competing against the CPU. First to 5 wins!";
        playerCount = 0;
        cpuCount = 0;
        div2.innerText = `${playerCount}`;
        div3.innerText = `${cpuCount}`;
        return;
    }
    if(cpuCount == 5){
        alert("Sorry you lost :( Feel free to play again!");
        div.innerText = "Welcome to my Rock Paper Scissors Game. You will be competing against the CPU. First to 5 wins!";
        playerCount = 0;
        cpuCount = 0;
        div2.innerText = `${playerCount}`;
        div3.innerText = `${cpuCount}`;
        return;
    }
}));
