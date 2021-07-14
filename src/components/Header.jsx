import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<Link to="/">Kaho Shibuya</Link>
			<div className="hamburger">
				<div className="hamburgerLine"></div>
			</div>
			<div className="overlay">
				<nav>
					<ul className="menu">
						<li className="menuItem">
							<Link to="/works">WORKS</Link>
						</li>
						<li className="menuItem">
							<Link to="/about">ABOUT</Link>
						</li>
						<li className="menuItem">
							<a
								href="/resume"
								download
								style={{ 'pointer-events': 'none', cursor: 'not-allowed' }}
							>
								RESUME
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
