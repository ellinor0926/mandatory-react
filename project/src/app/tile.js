import React from 'react';

export default function Tile({piece, onClick, line}) {
    let player = piece === 0 ? '' : 'plr' + piece;
    let playerClass = `tile ${player} ${line ? 'line' : ''}`;

    let output;
    if (piece === 1) {
        output = 'X';

    } else if (piece === 2) {
        output = 'O';
    }


    return (
        <div
            className={playerClass}
            piece={piece}
            onClick={onClick}
            line={line}
        >
            {output}
        </div>
    );
}
