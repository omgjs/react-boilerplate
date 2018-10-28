import React from "react";
import { Fetch } from "react-data-fetching";

export default () => (
	<div className="content">
		<Fetch loader={<Loader />} url="/" timeout={5000}>
			{({ data }) => (
				<div>
					<h1>Username</h1>
					<p>{data.name}</p>
					<textarea value={data} readOnly cols={90} rows={35} />
				</div>
			)}
		</Fetch>
	</div>
);

const Loader = () => <div>Loading...</div>;
