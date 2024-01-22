import React from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Hero() {
	return (
		<div className="hero">
			<h2>Hi, I'm Kaho</h2>
			<h1>
				<span className="underline">Frontend Developer</span>
				<span>&#160;&&#160;</span>
				<span className="underline">React Developer</span>
			</h1>
			<section>
				<p>
					<span>I am a frontend developer and a passionate learner.</span>
					<br />
					<span>
						Growing as a web developer is a never ending journey and I'd like to
						keep doing it for fun!
					</span>
				</p>
			</section>
			<section className="social-icons">
				<a href="mailto: kshibuya31@gmail.com">
					<FiMail />
				</a>
				<a href="https://github.com/shiv-chan">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/kaho-shibuya">
					<FaLinkedin />
				</a>
				<a href="https://dev.to/shivchan">
					<FaDev />
				</a>
			</section>
		</div>
	);
}
