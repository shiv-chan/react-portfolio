import React, { useContext } from 'react';
import { projectsDataContext } from '../context';
import { useParams } from 'react-router';
import { BiLinkExternal, FaGithub, FiGlobe } from 'react-icons/all';
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
			<article className="external-links">
				{project.website === '' ? (
					''
				) : (
					<a
						href={project.website}
						alt="website"
						target="_blank"
						rel="noreferrer"
					>
						<FiGlobe />
					</a>
				)}
				{project.source_code === '' ? (
					''
				) : (
					<a
						href={project.source_code}
						alt="github"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub />
					</a>
				)}
			</article>
			<img src={project.image} alt={project.title} />
			<section className="details">
				<h2 className="details-head">Language & Tool</h2>
				<div className="language-tool-list">
					{project.icons.map((icon) => (
						<article className="language-icon">
							<img src={icon[1]} alt={icon[0]} />
							<p>{icon[0]}</p>
						</article>
					))}
				</div>
				<h2 className="details-head">Production Period</h2>
				<p className="details-item">{project.period}</p>
				<h2 className="details-head">Responsibilities</h2>
				<p className="details-item">{project.responsibilities}</p>
			</section>
			<section className="project-description">
				{project.long_description()}
			</section>
		</div>
	);
}
