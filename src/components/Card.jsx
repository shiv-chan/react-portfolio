import React from 'react';
import { BsImage } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export function convertTitleToParams(title) {
	const regex = / /g;
	const lowerCaseTitle = title.toLowerCase();
	return lowerCaseTitle.replace(regex, '-');
}

export default function Card({ project }) {
	const { isReady, title, thumbnail, short_description, icons } = project;
	const titleParams = convertTitleToParams(title);

	return isReady ? (
		<Link to={`/works/${titleParams}`}>
			<article className="card">
				<img className="thumbnail" src={thumbnail} alt={title} />
				<section>
					<h1>{title}</h1>
					<p>{short_description}</p>
				</section>
			</article>
			<div className="lang-icons">
				{icons.slice(0, 3).map((icon) => (
					<div key={icon[0]} className="icon">
						<img src={icon[1]} alt={icon[0]} />
					</div>
				))}
			</div>
		</Link>
	) : (
		<Link>
			<article className="card">
				<div className="dummy-thumnail">
					<BsImage />
				</div>
				<section>
					<h1>Coming Soon...</h1>
					<p></p>
				</section>
			</article>
		</Link>
	);
}
