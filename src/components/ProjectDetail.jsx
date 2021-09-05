import React, { useContext } from 'react';
import { projectsDataContext } from '../context';
import { useParams } from 'react-router';
import { BiLinkExternal, FaGithub } from 'react-icons/all';
import { convertTitleToParams } from './Card';

export default function ProjectDetail() {
	const projectsData = useContext(projectsDataContext);
	const { projectName } = useParams();
	const project = projectsData.find(
		(project) => convertTitleToParams(project.title) === projectName
	);

	return (
		<div className="project-detail">
			<h1>{project.title}</h1>
			{project.long_description()}
			<section className="details">
				<h2>Language & Tool</h2>
				<div className="language-tool-list">
					{project.icons.map((icon) => (
						<article>
							<img src={icon[1]} alt={icon[0]} />
							<p>{icon[0]}</p>
						</article>
					))}
				</div>
				<h2>Production Period</h2>
				<p>{project.period}</p>
				<h2>Responsibilities</h2>
				<p>{project.responsibilities}</p>
			</section>
			<article>
				<img src={project.image} alt={project.title} />
				<div className="links">
					{project.website === '' ? (
						''
					) : (
						<a href={project.website} alt="website">
							<BiLinkExternal />
							Website
						</a>
					)}
					<a href={project.source_code} alt="source-code">
						<FaGithub />
						Source code
					</a>
				</div>
			</article>
		</div>
	);
}
