let board = [[" "," "," "],[" "," "," "],[" "," "," "]];
let currentPlayer = "X";
let stopGame = 0;
let counter = 0;

window.onload = function() {
    let game = document.getElementById("game");
    let board = "";
    for (let i = 0; i < 3; ++i) {
        board += '<div class = "line">';
        for (let j = 0; j < 3; ++j) {
            board += '<div class = "column" id = "' + i + j + '" onclick = "tableGame(' + i + ', ' + j + ')"></div>';
        }
        board += '</div>';
    }
    game.innerHTML = board;
};

function tableGame(i, j) {
    if (stopGame == 0) {
        if (board[i][j] == ' ') {
            ++counter;
            board[i][j] = currentPlayer;
            document.getElementById('alert').innerText = "";
        } else {
            document.getElementById('alert').innerText = "The cell is busy";
            return;
        }
        if (currentPlayer == 'X') {
            currentPlayer = '0';
        } else {
            currentPlayer = 'X';
        }
        document.getElementById('' + i + j).innerHTML = board[i][j];
        statusGame();
    }
}

function statusGame() {
    let playerWiner = 0;
    for (let i = 0; i < 3; ++i) {
        if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] != ' ') {
            playerWiner = board[i][0];
            stopGame = 1;
            document.getElementById('result').innerHTML = "Congratulations" + " " + playerWiner + " " + "won the game";
        } else if (board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != ' ') {
            layerWiner = board[0][i];
            stopGame = 1;
            document.getElementById('result').innerHTML = "Congratulations" + " " + playerWiner + " " + "won the game";
            }
    }
    if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != ' ') {
        playerWiner = board[0][0];
        stopGame = 1;
        document.getElementById('result').innerHTML = "Congratulations" + " " + playerWiner + " " + "won the game";
    } else if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != ' ') {
        playerWiner = board[0][2];
        stopGame = 1;
        document.getElementById('result').innerHTML = "Congratulations" + " " + playerWiner + " " + "won the game";
    }
    if (counter == 9) {
        document.getElementById('result').innerHTML = "Draw";
    }
} 