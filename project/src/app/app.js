import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

export default class App extends React.Component {
    state = newGame();

    handleClick = (key) => {
        this.setState(makeMove(this.state, key));
        console.log(this.state);
    };

    newGame = () => {
        this.setState (newGame());
    };

    render() {
        return (
            <div className='container'>
                <Message state={this.state.state}/>
                <div className='board'>
                    {this.state.board.map((tile, i) => {
                        return (
                            <Tile
                                key={i}
                                piece={tile}
                                onClick={() => this.handleClick(i)}
                                line={this.state.line.includes(i)}
                            />
                        )
                    })}
                </div>
                <button onClick={this.newGame}>Reset Game</button>
            </div>
        );
    }
}
