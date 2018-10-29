import React from "react";
import { dataComponentWithPropTypes } from "@omgjs/turbo";
import { object } from "prop-types";

/* eslint-disable camelcase */
const Page = ({ data: { data } }) =>
	data.value.map(({ name, html_url, description }) => (
		<React.Fragment key={name}>
			<h2>
				<a href={html_url}>{name}</a>
			</h2>
			<p>{description}</p>
		</React.Fragment>
	));
/* eslint-enable */

const Loading = () => <h1>Loading...</h1>;

const Rejected = () => <h1>REQUEST REJECTED!!!</h1>;

const Unknown = () => <h1>UNKNOWN STATE</h1>;

export default dataComponentWithPropTypes({
	Loading,
	Rejected,
	Unknown,
	Fulfilled: Page,
	PropTypes: {
		data: object,
	},
});
