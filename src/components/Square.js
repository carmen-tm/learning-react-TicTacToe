import React, { Component } from 'react';
import styles from './Square.module.scss';

class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.newIndex
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		const filled = 'x';
		//Easy way
		// this.setState({ value: filled });
		//Callback way
		this.setState((prevState, props) => ({
			value: prevState.value === props.newIndex ? filled : props.newIndex
		}));
	}
	render() {
		const { name, newIndex } = this.props;
		const { value } = this.state;
		return (
			<button
				onClick={this.handleClick}
				data-id={name}
				className={styles.square}
			>
				{value}
			</button>
		);
	}
}

export default Square;
