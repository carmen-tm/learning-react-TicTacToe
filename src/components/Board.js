import React, { Component } from 'react';
import styles from './Board.module.scss';
import Square from './Square';

class Board extends Component {
	constructor(props) {
		super(props);
		//Create state of mother Bord
		this.state = {
			// squaresArr: []
			squaresArr: Array(9).fill('')
			// squaresArr: [0, 1, 2, 3, 4, 5, 6, 7, 8]
		};

		this.renderSquare = this.renderSquare.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(i) {
		this.setState((prevState, props) => {
			//Use slice() method to create a copy of the original array isntead of modifying the existing array (INMUTABILILTY), useful for futuer Time-travel functionality
			const arrModif = prevState.squaresArr.slice();
			arrModif[i] = 'x';
			return { squaresArr: arrModif };
		});
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
			/>
		);
	}

	// createArr() {
	// 	Array(9).fill("").map(function(value, index))
	// }

	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className={styles.status}>{status}</div>
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
			</div>
		);
	}
}

export default Board;
