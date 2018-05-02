import React from 'react';

export default function Message({state}) {
    let output;

    if (state === 'plr1') {
        output = `Player 1's turn`;
    } else if (state === 'plr2') {
        output = `Player 2's turn`;
    } else if (state === 'plr1won') {
        output = `Player 1 won!`;
    } else if (state === 'plr2won') {
        output = `Player 2 won!`
    } else {
        output = `It's a draw`
    }

    return (
        <div>{output}</div>
    );
}
