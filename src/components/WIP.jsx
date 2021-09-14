import React from 'react';
import { Link } from 'react-router-dom';

export default function WIP() {
	return (
		<div className="wip">
			<h2>
				<span>Sorry...</span>
				<br />
				<span>It's a work in progress.</span>
			</h2>
			<Link to="/">
				<button>Back to top</button>
			</Link>
		</div>
	);
}
