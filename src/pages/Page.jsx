import React from "react";
import { componentWithPropTypes } from "@omgJS/turbo";
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

function DataComponent(props) {
	const {
		data: { data },
	} = props;
	if (data.pending) {
		return <Loading />;
	}
	if (data.rejected) {
		return <Rejected />;
	}
	if (data.fulfilled) {
		return <Page {...props} />;
	}
	return <h1>UNKNOWN STATE</h1>;
}

export default componentWithPropTypes(DataComponent, {
	data: object,
});
