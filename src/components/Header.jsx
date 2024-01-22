import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/icons/portfolio-icon.png';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<header>
			<Link to="/">
				<img src={Icon} alt="icon" />
				KAHO SHIBUYA
			</Link>
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
					</ul>
				</nav>
			</div>
		</header>
	);
}
