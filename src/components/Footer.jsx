import React from 'react';
import { FiMail, FaGithub, FaLinkedin, FaDev } from 'react-icons/all';

export default function Footer() {
	return (
		<footer>
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
		</footer>
	);
}
