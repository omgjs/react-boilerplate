import React from "react";
import { Link } from "react-router-dom";

let ulStyle;
let menuItemStyle;
let menuLinkStyle;
let logoStyle;
let logoLinkStyle;
let searchStyle;
let searchInputStyle;

export default () => (
	<ul style={ulStyle}>
		<Logo />
		<Search />
		<MenuItem url="/" title="Home" />
		<MenuItem url="/page" title="Fetch Data" />
		<MenuItem url="/page/453798" title="Page with params" />
		<MenuItem url="/page2/params" title="Another Page with params" />
	</ul>
);

/* eslint-disable react/prop-types */
const MenuItem = ({ url, title }) => (
	<li style={menuItemStyle}>
		<Link style={menuLinkStyle} to={url}>
			{title}
		</Link>
	</li>
);
/* eslint-enable */

const Logo = () => (
	<li style={logoStyle}>
		<Link style={logoLinkStyle} to="/">
			omgjs / turbo
		</Link>
	</li>
);

const Search = () => (
	<li style={searchStyle}>
		<input style={searchInputStyle} size={60} />
	</li>
);

/** STYLES GOES BELOW                                    **
 * **********************************************************
 * ***********************************************************
 * **********************************************************
 * **********    **       *
 * ***********    **      *
 * *************    ***  *
 * *********************
 * *************
 * *************
 * **************
 * *************
 */

ulStyle = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	listStyle: "none",
	margin: 0,
	padding: 0,
	alignItems: "center",
};

menuItemStyle = {
	color: "white",
	margin: "0",
	padding: "0",
};
menuLinkStyle = {
	// background: "#fff4d0",
	color: "#bb9b2d",
	fontFamily: "Segoe UI",
	fontSize: "16px",
	fontWeight: "bold",
	textDecoration: "none",
	textTransform: "uppercase",
	lineHeight: "24px",
	display: "block",
	margin: "1px 1px 1px 0",
	padding: "0.5rem",
	whiteSpace: "nowrap",
};

const headerElementsMargin = "2rem";

logoStyle = {
	marginRight: headerElementsMargin,
	marginLeft: "5rem",
};
logoLinkStyle = {
	color: "#ab9858",
	fontSize: "2.5em",
	fontWeight: "bold",
	textDecoration: "none",
	whiteSpace: "nowrap",
};

searchStyle = {
	marginRight: headerElementsMargin,
	padding: "0.8em 0 0.8em 0",
	display: "flex",
	alignSelf: "stretch",
	alignItems: "stretch",
};
searchInputStyle = {
	background: "#fff4d0",
	outline: "none",
	fontSize: "16px",
};
