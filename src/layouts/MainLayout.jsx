import React, { PureComponent } from "react";
import { func } from "prop-types";
import Menu from "components/Menu";

/* eslint-disable react/prefer-stateless-function */
export default class extends PureComponent {
	static propTypes = {
		content: func.isRequired,
	};

	static defaultProps = {};

	render() {
		const Content = this.props.content; // eslint-disable-line react/destructuring-assignment
		return (
			<div>
				<Menu />
				<br />
				<Content />
			</div>
		);
	}
}
