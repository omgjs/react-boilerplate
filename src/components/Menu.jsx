import React from "react";
import { Link } from "react-router-dom";

export default () => (
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
