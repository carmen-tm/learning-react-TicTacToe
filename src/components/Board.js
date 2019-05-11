import React, { Component } from 'react';
import styles from './Board.module.scss';
import Square from './Square';

class Board extends Component {
	constructor(props) {
		super(props);
		//Create state of mother Bord
		this.state = {
			// squaresArr: []
			squaresArr: Array(9).fill(''),
			xIsNext: true
		};
		this.renderSquare = this.renderSquare.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(i) {
		this.setState((prevState, props) => {
			//Use slice() method to create a copy of the original array isntead of modifying the existing array (INMUTABILILTY), useful for futuer Time-travel functionality
			const arrModif = prevState.squaresArr.slice();
			//Consult the previous state each time, and depending of the boolean that is inside 'xIsNext', will flip between x and o, and will also invert the boolean
			arrModif[i] = prevState.xIsNext ? 'x' : 'o';
			return {
				squaresArr: arrModif,
				//Always the contrary of what it was previously
				xIsNext: !prevState.xIsNext
			};
		});
	}

	calculateWinner() {
		const lines = [[0, 1, 2]];
		for (let i = 0; i < lines.length; i++) {
			//Just check winner if there are written things x/o
			if (this.state.squaresArr[i]) {
				if (
					this.state.squaresArr[0] === this.state.squaresArr[1] &&
					this.state.squaresArr[1] === this.state.squaresArr[2]
				) {
					return 'winner!!';
				} else {
					return '';
				}
			}
		}
	}

	//Method of the class Board
	renderSquare(i) {
		return (
			<Square
				//Props that go from mother->childrem:
				name={`Square Number ${i}`}
				index={i}
				newIndex={this.state.squaresArr[i]}
				//Gonna pass a function from mother->childrem to achieve LIFTING (make the childrem by able to change mother's state, and pass new props down)
				onClick={() => this.handleClick(i)}
				// onClick={this.handleClick(i)} //No funciona
				// gameResult={this.calculateWinner()}
			/>
		);
	}

	// createArr() {
	// 	Array(9).fill("").map(function(value, index))
	// }

	render() {
		// const status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o');
		const { state } = this;

		function status() {
			const nextLetter = state.xIsNext ? 'x' : 'o';
			const message = `Next player round: ${nextLetter}`;
			return message;
		}

		return (
			<div>
				<h1>The Tic Tac Toe game</h1>
				<h2 className={styles.status}>{status()}</h2>
				<div className={styles.boardRow}>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className={styles.boardRow}>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className={styles.boardRow}>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
				<h3>{this.calculateWinner()}</h3>
			</div>
		);
	}
}

export default Board;
