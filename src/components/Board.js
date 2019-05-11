import React, { Component } from 'react';
import styles from './Board.module.scss';
import Square from './Square';

class Board extends Component {
	constructor(props) {
		super(props);

		this.renderSquare = this.renderSquare.bind(this);
	}

	//Method of the class Board
	renderSquare(i) {
		return <Square index={i} name={`Square Number ${i}`} />;
	}

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
