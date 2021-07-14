import React from 'react';
import { BsImage } from 'react-icons/all';
import { Link } from 'react-router-dom';

export default function Card({
	isReady,
	thumbnail,
	icons,
	title,
	description,
}) {
	return isReady ? (
		<Link to={`/works/${title}`}>
			<article>
				<div className="thumbnail">
					<img src={thumbnail} alt={title} />
				</div>
				<div className="lang-icons">
					{icons.map((icon) => (
						<div key={icon} className="icon">
							<img src={icon} alt={icon} />
						</div>
					))}
				</div>
				<section>
					<h1>{title}</h1>
					<p>{description}</p>
				</section>
			</article>
		</Link>
	) : (
		<article>
			<div className="dummy-thumnail">
				<BsImage />
			</div>
			<section>
				<h1>Coming Soon...</h1>
				<p></p>
			</section>
		</article>
	);
}
