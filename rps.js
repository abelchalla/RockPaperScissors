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
