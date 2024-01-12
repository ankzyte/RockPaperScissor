// JavaScript source code
let playerScore = 0;
let compScore = 0;

let currPlayerScore = document.querySelector("#player");
let currCompScore = document.querySelector("#comp");
let buttons = document.querySelectorAll(".sign");
let compMoves = ["Rock", "Paper", "Scissor"];
let winnerName = document.querySelector(".winner-name");
let currMove;

let comp = () => {
    let randomInteger = Math.floor(Math.random() * 3);
    currMove = compMoves[randomInteger];
}

let gameResult = (e) => {
    let winner;
    let currButton = e.currentTarget;
    if (currMove == "Rock") {
        if (currButton == buttons[0]) {
            winner = "It was Draw.";
            winnerName.classList.remove("lost", "won");
            winnerName.classList.add("draw");
        }
        else if (currButton == buttons[1]) {
            winner = `You Won. paper beats ${currMove}`;
            winnerName.classList.remove("lost", "draw");
            winnerName.classList.add("won");
            playerScore += 1;
        }
        else {
            winner = `You lost. ${currMove} beats scissors`;
            winnerName.classList.remove("won", "draw");
            winnerName.classList.add("lost");
            compScore += 1;
        }
    }
    else if (currMove == "Paper") {
        if (currButton == buttons[0]) {
            winner = `You lost. ${currMove} beats rock`;
            winnerName.classList.remove("won", "draw");
            winnerName.classList.add("lost");
            compScore += 1;
        }
        else if (currButton == buttons[1]) {
            winner = "It was Draw.";
            winnerName.classList.remove("lost", "won");
            winnerName.classList.add("draw");
        }
        else {
            winner = `You Won. scissors beats ${currMove}`;
            winnerName.classList.remove("lost", "draw");
            winnerName.classList.add("won");
            playerScore += 1;
        }
    }
    else {
        if (currButton == buttons[0]) {
            winner = `You Won. Rock beats ${currMove}`;
            winnerName.classList.remove("lost", "draw");
            winnerName.classList.add("won");
            playerScore += 1;
        }
        else if (currButton == buttons[1]) {
            winner = `You lost. ${currMove} beats paper`;
            winnerName.classList.remove("won", "draw");
            winnerName.classList.add("lost");
            compScore += 1;
        }
        else {
            winner = "It was Draw.";
            winnerName.classList.remove("lost", "won");
            winnerName.classList.remove("won", "draw");
            winnerName.classList.add("draw");
        }
    }
    winnerName.innerText = winner;
    currPlayerScore.innerText = Number(playerScore);
    currCompScore.innerText = Number(compScore);
}

buttons.forEach((button) => {
    button.addEventListener("click", comp);
    button.addEventListener("click", gameResult); 
});

