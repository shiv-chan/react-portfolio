import React, { useContext } from 'react';
import { projectsDataContext } from '../context';
import Card from './Card';

export default function Works() {
	const projectsData = useContext(projectsDataContext);

	return (
		<div className="works">
			<h1>WORKS</h1>
			<section className="card-section">
				{projectsData.map((project) => (
					<Card key={project.title} project={project} />
				))}
			</section>
		</div>
	);
}
