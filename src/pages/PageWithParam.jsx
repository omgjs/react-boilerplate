import React from "react";
import { componentWithPropTypes } from "@omgJS/turbo";
import { shape, func } from "prop-types";

export default componentWithPropTypes(
	({ history }) => (
		<div>
			Page with props
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
