import React, { Component } from 'react';
import styles from './Square.module.scss';

// function Square(props) {
// 	// console.log(this.props);
// 	const { name, newIndex, onClick } = props;
// 	return (
// 		<button
// 			className={styles.square}
// 			data-id={name}
// 			data-index={newIndex}
// 			onClick={onClick}
// 		>
// 			{newIndex}
// 		</button>
// 	);
// }

class Square extends Component {
	render() {
		// 	// console.log(this.props);
		const { name, newIndex, onClick } = this.props;
		return (
			<button
				className={styles.square}
				data-id={name}
				data-index={newIndex}
				onClick={onClick}
			>
				{newIndex}
			</button>
		);
	}
}

export default Square;
