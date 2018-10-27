import React from "react";
import { Link } from "react-router-dom";

let ulStyle;
let liStyle;

export default () => (
	<ul style={ulStyle}>
		<MenuItem url="/" title="Home" />
		<MenuItem url="/page" title="Page" />
		<MenuItem url="/page/453798" title="Page with params" />
	</ul>
);

/* eslint-disable react/prop-types */
const MenuItem = ({ url, title }) => (
	<li style={liStyle}>
		<Link style={{ color: "#000000", textDecoration: "underline" }} to={url}>
			{title}
		</Link>
	</li>
);
/* eslint-enable */

/** BELOW GOES STYLES                                    **
 * **********************************************************
 * ***********************************************************
 * **********************************************************
 * **********    **       *
 * ***********    **      *
 * *************    *    *
 * *********************
 * *************
 * *************
 * *****(********
 */

ulStyle = {
	display: "flex",
	flexDirection: "row",
	listStyle: "none",
	fontSize: "2em",
	margin: 0,
	padding: 0,
	paddingRight: "30em",
};

liStyle = {
	color: "white",
	margin: "",
	paddingBottom: "0.2em",
	paddingTop: "0.12em",
	paddingRight: "1em",
};
