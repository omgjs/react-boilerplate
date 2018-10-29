import React from "react";
import { func } from "prop-types";

const Layout = ({ Menu, Content }) => (
	<>
		<header>
			<Menu />
		</header>
		<div className="content">
			<Content />
		</div>
	</>
);

Layout.propTypes = {
	Content: func.isRequired,
	Menu: func.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
export default Layout;
