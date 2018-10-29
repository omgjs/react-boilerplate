import React, { PureComponent } from "react";
import { func } from "prop-types";

/* eslint-disable react/prefer-stateless-function */
export default class extends PureComponent {
	static propTypes = {
		content: func.isRequired,
		menu: func.isRequired,
	};

	static defaultProps = {};

	render() {
		// console.debug("props", this.props); // eslint-disable-line no-console
		const Content = this.props.content; // eslint-disable-line react/destructuring-assignment
		const Menu = this.props.menu; // eslint-disable-line react/destructuring-assignment
		return (
			<>
				<header>
					<Menu />
				</header>
				<div className="content">
					<Content />
				</div>
			</>
		);
	}
}
