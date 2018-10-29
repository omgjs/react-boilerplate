import React from "react";
import { shape, func } from "prop-types";

const PageWithProps = ({ history }) => (
	<>
		<h1>Page with props</h1>
		<button type="button" onClick={() => history.goBack()}>
			Go back
		</button>
	</>
);

PageWithProps.protoTypes = {
	history: shape({
		goBack: func.isRequired,
	}).isRequired,
};

export default PageWithProps;
