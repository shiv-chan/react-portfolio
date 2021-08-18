import React from 'react';
import Hero from './Hero';
import Card from './Card';

import projectsData from '../projectsData';

export default function Home() {
	return (
		<>
			<Hero />
			<section className="card-section">
				{projectsData.slice(0, 4).map((project) => (
					<Card
						key={project.title}
						isReady={project.isReady}
						project={project}
					/>
				))}
			</section>
		</>
	);
}
