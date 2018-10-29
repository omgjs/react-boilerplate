import React from "react";
import { componentWithPropTypes } from "@omgjs/turbo";
import { shape, func } from "prop-types";

export default componentWithPropTypes(
	({ history }) => (
		<>
			<h1>Another way to create page with propTypes.</h1>
			<p>
				If you check source code - there are no names for
				structures/classes/functions, so someone will like it more
			</p>
			<button type="button" onClick={() => history.goBack()}>
				Go back
			</button>
		</>
	),
	{
		history: shape({
			goBack: func.isRequired,
		}).isRequired,
	},
);
