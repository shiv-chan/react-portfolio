import React from 'react';
import profilePic from '../assets/profile.jpg';

export default function About() {
	return (
		<div className="about">
			<h1>ABOUT</h1>
			<article>
				<img src={profilePic} alt="profile" />
				<section>
					<p>
						Kaho Shibuya is a front-end web developer currently focusing on
						React.js.
					</p>
					<p>
						She is determined and passionate learner, goal-oriented,
						well-organized, and prosocial person.
					</p>
					<p>
						Also, she has been active in several tech communities.
						<br />
						Even as a junior, she has been trying to help others learn more
						about tech as much as possible. She has contributed by sharing her
						own progress, the learning methods or resources for beginners, or by
						doing a lot of Q&As.
					</p>
					<p>
						With 3+ years of experience as a digital marketer, she is interested
						in user experience, promoting, and monetizing the service as well.
						She believes that this makes it easier for her to collaborate with a
						marketing or business team.
					</p>
					<p>
						As a professional, she likes to have a clear vision or path to where
						the team/the company is aiming for, to set a goal, and to know the
						consequences of what I do.
						<br />
						She needs to focus on her tasks on her own sometimes, however, she’s
						always open to discuss or share her thoughts, opinions or even her
						failures. She’s comfortable with being the first penguin. Also, she
						would appreciate it if she can get honest feedback making her grow.
					</p>
					<p>
						Growing as a web developer is a never ending journey and she'd love
						to keep doing it for fun!
					</p>
				</section>
				<section>
					<h2>Skills/Interest</h2>
					<p>
						JavaScript, React, Redux, Node.js, HTML, CSS, Sass, Bootstrap,
						Webpack/Babel, StyledComponents, Git, GitHub, PHP, SQL, mySQL, Big
						Query, Google App Script, Google Analytics, Google Tag Manager
					</p>
					<h2>Personality traits</h2>
					<p>
						goal-oriented, determined, well-organized, prosocial, D-style in
						DiSC, ESFJ in 16 personalities
					</p>
					<p>
						- DiSC:{' '}
						<a href="https://www.discprofile.com/what-is-disc/disc-styles">
							https://www.discprofile.com/what-is-disc/disc-styles
						</a>
						<br />- 16 Personalities | ESFJ :{' '}
						<a href="https://www.16personalities.com/esfj-personality">
							https://www.16personalities.com/esfj-personality
						</a>
					</p>
				</section>
			</article>
		</div>
	);
}
