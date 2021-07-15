import React from 'react';
import Hero from './Hero';
import Card from './Card';

// icons
import FigmaIcon from '../assets/icons/icons-figma.svg';
import ReactIcon from '../assets/icons/icons-react.svg';
import SassIcon from '../assets/icons/icons-sass.svg';

export default function Home() {
	return (
		<>
			<Hero />
			<Card
				isReady={true}
				thumbnail="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
				icons={[FigmaIcon, ReactIcon, SassIcon]}
				title="Title"
				description="Amet consequat id quis dolor adipisicing minim enim ut magna
					exercitation ipsum."
			/>
			<Card isReady={false} />
		</>
	);
}
