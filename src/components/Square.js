import React from 'react';
import styles from './Square.module.scss';

function Square(props) {
	// console.log(this.props);
	const { name, newIndex, onClick, squareClass } = props;
	return (
		<button
			className={styles.squareX}
			data-id={name}
			data-index={newIndex}
			onClick={onClick}
		>
			{newIndex}
		</button>
	);
}

export default Square;
