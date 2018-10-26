import React from "react";
import Menu from "components/Menu";

export default props => {
	console.debug("props", props); // eslint-disable-line no-console
	return (
		<div>
			<Menu {...props} />
			<br />
			Page with props
			<button type="button" onClick={() => props.history.goBack()}>
				Go back
			</button>
		</div>
	);
};
