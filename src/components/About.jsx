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
						Kaho Shibuya is{' '}
						<span class="highlight">a front-end web developer</span> currently
						focusing on
						<span class="highlight"> React</span>.
					</p>
					<p>
						She is <span class="highlight">determined</span> and{' '}
						<span class="highlight">passionate learner</span>,{' '}
						<span class="highlight">goal-oriented</span>,
						<span class="highlight">well-organized</span>, and{' '}
						<span class="highlight">prosocial</span> person.
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
						With 3+ years of experience as a digital marketer, she is intrigued
						with <span class="highlight">user experience</span>,{' '}
						<span class="highlight">promoting</span>, and{' '}
						<span class="highlight">monetizing</span> the service as well. She
						believes that this makes it easier for her to collaborate with a
						marketing or business team.
					</p>
					<p>
						As a professional, she likes to have a clear vision or path to where
						the team/the company is aiming for, to set a goal, and to know the
						consequences of what she does.
						<br />
						She needs to focus on her tasks on her own sometimes, however, she’s
						always{' '}
						<span class="highlight">
							open to discuss or share her thoughts, opinions or even her
							failures.
						</span>{' '}
						She’s comfortable with being the first penguin. Also, she would
						appreciate it if she can get honest feedback making her grow.
					</p>
					<p>
						Growing as a web developer is a never ending journey and she'd love
						to keep doing it for fun!
					</p>
				</section>
				<section>
					<h2>Skills/Interest</h2>
					<p>
						<span class="highlighted-lang">JavaScript</span>,{' '}
						<span class="highlighted-lang">React</span>,{' '}
						<span class="highlighted-lang">Redux</span>, Next.js, Angular, Node,
						Express, MongoDB, Mongoose, HTML/CSS, SASS, Bootstrap,
						Webpack/Babel, StyledComponents, Git, GitHub, PHP, SQL, MySQL, Big
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
