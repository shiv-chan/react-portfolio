import React from 'react';
import { FiMail } from "react-icons/fi";
import {  FaGithub, FaLinkedin, FaDev } from "react-icons/fa";


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
