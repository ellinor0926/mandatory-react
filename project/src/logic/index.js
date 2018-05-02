// ---------- A tic-tac-toe gaming library! ------------

export const newGame = () => ({
    state: 'plr1',
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    line: []
});

const isWinningLine = (board) => {

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let value of winPatterns) {
        const [a, b, c] = value;
        if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) {
            return value;
        }
    }
};

const isDraw = (board) => {
    for (let value of board) {
        if (value === 0) {
            return false;
        }
    }
    return !isWinningLine(board);
};

export const makeMove = (game, pos) => {
    let nextState;
    let nextBoard = [...game.board];
    let winningLine = [];

    if (nextBoard[pos] || isWinningLine(nextBoard)) {
        return game;
    }
    else if (game.state === 'plr1') {
        nextBoard[pos] = 1;

        if(isDraw(nextBoard)) {
            nextState = 'draw'
        }
        else if (isWinningLine(nextBoard)) {
            nextState = 'plr1won';
            winningLine = isWinningLine(nextBoard)
        }
        else {
            nextState = 'plr2';
        }

    } else if (game.state === 'plr2') {
        nextBoard[pos] = 2;

        if(isDraw(nextBoard)) {
            nextState = 'draw'
        }
        else if (isWinningLine(nextBoard)) {
            nextState = 'plr2won';
            winningLine = isWinningLine(nextBoard);
        }
        else {
            nextState = 'plr1';
        }
    }

    return {
        state: nextState,
        board: nextBoard,
        line: winningLine
    }
};
