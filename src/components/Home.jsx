import React, { useContext } from 'react';
import { projectsDataContext } from '../context';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Card from './Card';

export default function Home() {
	const projectsData = useContext(projectsDataContext);

	return (
		<>
			<Hero />
			<section className="card-section">
				{projectsData.slice(0, 4).map((project) => (
					<Card key={project.title} project={project} />
				))}
			</section>
		</>
	);
}
