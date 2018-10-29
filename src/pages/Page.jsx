import React from "react";
import { dataComponentWithPropTypes } from "@omgjs/turbo";
import { object } from "prop-types";

/* eslint-disable camelcase */
const RepositoryListItem = ({ repo: { name, html_url, description } }) => (
	<>
		<h2>
			<a href={html_url}>{name}</a>
		</h2>
		<p>{description}</p>
	</>
);
/* eslint-enable */

const RepositoryList = ({ data: { data } }) =>
	data.value.map(repo => (
		<React.Fragment key={repo.name}>
			<RepositoryListItem repo={repo} />
		</React.Fragment>
	));

const Loading = () => <h1>Loading...</h1>;

const Rejected = () => <h1>REQUEST REJECTED!!!</h1>;

const Unknown = () => <h1>UNKNOWN STATE</h1>;

export default dataComponentWithPropTypes({
	Loading,
	Rejected,
	Unknown,
	Fulfilled: RepositoryList,
	PropTypes: {
		data: object,
	},
});
