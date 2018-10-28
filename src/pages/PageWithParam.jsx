import React from "react";
import { componentWithPropTypes } from "@omgJS/turbo";
import { shape, func } from "prop-types";

export default componentWithPropTypes(
	({ history }) => (
		<div className="content">
			<h1>Page with props</h1>
			<button type="button" onClick={() => history.goBack()}>
				Go back
			</button>
		</div>
	),
	{
		history: shape({
			goBack: func.isRequired,
		}).isRequired,
	},
);
