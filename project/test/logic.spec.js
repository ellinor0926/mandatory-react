import {makeMove, newGame} from '../src/logic';

test('first move works ok', () => {
    const initial = newGame();
    const expected = {state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
    const result = makeMove(initial, 2);
    expect(result).toEqual(expected);
    expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
});
test('second move works ok', () => {
    const initial = newGame();
    const expected = {state: 'plr1', board: [2, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
    const result = makeMove(initial, 2);
    const result2 = makeMove(result, 0);
    expect(result2).toEqual(expected);
    expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
});

test('first player win, row', () => {
    const expected = {state: 'plr1won', board: [1, 1, 1, 0, 0, 0, 0, 0, 0], line: [0, 1, 2]};
    const move = {state: 'plr1', board: [1, 1, 0, 0, 0, 0, 0, 0, 0], line: []};
    const result = makeMove(move, 2);
    expect(result).toEqual(expected);
});
test('first player win, diagonal', () => {
    const expected = {state: 'plr1won', board: [1, 2, 2, 0, 1, 0, 0, 0, 1], line: [0, 4, 8]};
    const move = {state: 'plr1', board: [1, 2, 2, 0, 1, 0, 0, 0, 0], line: []};
    const result = makeMove(move, 8);
    expect(result).toEqual(expected);
});
test('second player win, row', () => {
    const expected = {state: 'plr2won', board: [1, 0, 1, 0, 0, 0, 2, 2, 2], line: [6, 7, 8]};
    const move = {state: 'plr2', board: [1, 0, 1, 0, 0, 0, 2, 2, 0], line: []};
    const result = makeMove(move, 8);
    expect(result).toEqual(expected);
});
test('second player win, column', () => {
    const expected = {state: 'plr2won', board: [2, 0, 1, 2, 0, 0, 2, 1, 1], line: [0, 3, 6]};
    const move = {state: 'plr2', board: [2, 0, 1, 2, 0, 0, 0, 1, 1], line: []};
    const result = makeMove(move, 6);
    expect(result).toEqual(expected);
});

test('if it is a draw', () => {
    const expected = {state: 'draw', board: [1, 2, 1, 2, 1, 1, 2, 1, 2], line: []};
    const move = {state: 'plr2', board: [1, 2, 1, 2, 1, 1, 2, 1, 0], line: []};
    const result = makeMove(move, 8);
    expect(result).toEqual(expected);
});
test('if there is a winner, no more moves should be possible', () => {
    const expected = {state: 'plr2won', board: [1, 0, 1, 0, 0, 0, 2, 2, 2], line: []};
    const move = {state: 'plr2won', board: [1, 0, 1, 0, 0, 0, 2, 2, 2], line: []};
    const result = makeMove(move, 1);
    expect(result).toEqual(expected);
});

test('when trying to click already chosen tile, nothing should happen', () => {
    const initial = newGame();
    const expected = {state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
    const result = makeMove(initial, 2);
    const result2 = makeMove(result, 2);
    expect(result2).toEqual(expected);
    expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
});

test('adding winning line to game.line', () => {
    const expected = {state: 'plr1won', board: [1, 1, 1, 0, 0, 0, 0, 0, 0], line: [0, 1, 2]};
    const move = {state: 'plr1', board: [1, 1, 0, 0, 0, 0, 0, 0, 0], line: []};
    const result = makeMove(move, 2);
    expect(result).toEqual(expected);
});