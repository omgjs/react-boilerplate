import React from "react";
import { Link } from "react-router-dom";

export default props => {
	console.debug("menu have this props:", props); // eslint-disable-line no-console
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/page">Page</Link>
			</li>
			<li>
				<Link to="/page/453798">Page with params</Link>
			</li>
		</ul>
	);
};
