import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<header>
			<Link to="/">KAHO SHIBUYA</Link>
			<div className="hamburger" onClick={handleClick}>
				<div className={`hamburgerLine ${isMenuOpen ? 'open' : ''}`}></div>
			</div>
			<div className={`overlay ${isMenuOpen ? 'open' : 'close'}`}>
				<nav>
					<ul className="menu">
						<li className="menuItem" onClick={handleClick}>
							<Link to="/works">WORKS</Link>
						</li>
						<li className="menuItem" onClick={handleClick}>
							<Link to="/about">ABOUT</Link>
						</li>
						<li className="menuItem" onClick={handleClick}>
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
