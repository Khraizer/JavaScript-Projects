function game(option){

let rock, paper, scissor;

if (option == 1) {
    rock = true;
}else if(option == 2){
    paper = true;
}else if(option == 3){
    scissor = true;
}

let computerOption = Math.floor(Math.random() * 3) + 1;
let rock2, paper2, scissor2;

    if (computerOption == 1) {
        rock2 = true;
    }else if(computerOption == 2){
        paper2 = true;
    }else if(computerOption == 3){
        scissor2 = true;
    }

    const messageElement = document.getElementById('message');
    const scoreboardComputer = document.getElementById('computer-score');
    const scoreboardUser = document.getElementById('user-score');
    let userScore = document.getElementById('user-score-data').value;
    let computerScore = document.getElementById('computer-score-data').value;


    if (rock) {
        if (rock2) {
            messageElement.textContent = "Empate: Ambos eligieron Piedra.";
        } else if (paper2) {
            messageElement.textContent = "Perdiste: Papel cubre Piedra.";
            computerScore++;
            scoreboardComputer.textContent = computerScore;
            document.getElementById('computer-score-data').value = computerScore;
        } else if (scissor2) {
            messageElement.textContent = "Ganaste: Piedra rompe Tijeras.";
            userScore++;
            scoreboardUser.textContent = userScore;
            document.getElementById('user-score-data').value = userScore;
        }
    } else if (paper) {
        if (rock2) {
            messageElement.textContent = "Ganaste: Papel cubre Piedra.";
            userScore++;
            scoreboardUser.textContent = userScore;
            document.getElementById('user-score-data').value = userScore;
        } else if (paper2) {
            messageElement.textContent = "Empate: Ambos eligieron Papel.";
        } else if (scissor2) {
            messageElement.textContent = "Perdiste: Tijeras cortan Papel.";
            computerScore++;
            scoreboardComputer.textContent = computerScore;
            document.getElementById('computer-score-data').value = computerScore;
        }
    } else if (scissor) {
        if (rock2) {
            messageElement.textContent = "Perdiste: Piedra rompe Tijeras.";
            computerScore++;
            scoreboardComputer.textContent = computerScore;
            document.getElementById('computer-score-data').value = computerScore;
        } else if (paper2) {
            messageElement.textContent = "Ganaste: Tijeras cortan Papel.";
            userScore++;
            scoreboardUser.textContent = userScore;
            document.getElementById('user-score-data').value = userScore;
        } else if (scissor2) {
            messageElement.textContent = "Empate: Ambos eligieron Tijeras.";
        }
    }
}