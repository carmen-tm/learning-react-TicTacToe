import React, { Component } from 'react';
import styles from './Game.module.scss';
import Board from './components/Board';

class Game extends Component {
	render() {
		return (
			<div className={styles.game}>
				<div className={styles.gameBoard}>
					<Board />
				</div>
				<div className={styles.gameInfo}>
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
