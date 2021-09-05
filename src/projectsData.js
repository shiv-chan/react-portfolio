// icons
import FigmaIcon from './assets/icons/icons-figma.svg';
import ReactIcon from './assets/icons/icons-react.svg';
import SassIcon from './assets/icons/icons-sass.svg';
import ReduxIcon from './assets/icons/icons-redux.svg';

// images
import TodoDemo from './assets/react-todo-app-demo.gif';

const projectsData = [
	{
		title: 'Todo App',
		thumbnail: TodoDemo,
		icons: [
			['React', ReactIcon],
			['Redux', ReduxIcon],
			['Sass', SassIcon],
		],
		short_description: 'A todo application built with React, Redux, and SCSS.',
		long_description: function () {
			return (
				<p>
					This application is one of the challenges on{' '}
					<a href="https://www.frontendmentor.io/" alt="fronend-mentor">
						Frontend Mentor
					</a>{' '}
					which provides the users with the overview of the application and its
					design.
					<br />
					<a
						href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
						alt="frontend-mentor-challenge"
					>
						Here
					</a>{' '}
					is the challenge for this project.
					<br />
					<br />I set a week timeframe for this personal project. This was a
					challenge for myself to be able to command <code>redux</code> from
					scratch.
					<br />
					Before I started to work on this, I had been in a “tutorial hell”. To
					get out of the hell, I decided to build this application without
					referring to any other source codes or a tutorial video. (I believe
					there are some tutorial videos about this particular challenge since
					Frontend Mentor is getting popular!)
					<br />
					<br />I started this process by putting the following command{' '}
					<code>npx create-react app react-todo-app --template redux</code>,
					which is creating a redux + plain JS boilerplate. Also, I installed{' '}
					<code>sass</code> and <code>node-sass</code> to utilize SASS for
					styling. Since I’m still learning and in the process of getting used
					to <code>redux</code>, figuring out which one should be a global state
					was very tough overall. There are main challenges I had on this
					project.
					<br />
					<br />
					<ol>
						<li>
							For sorting all todos with buttons, it seems like I need to have a
							local state that can store all todos to be shown each time. This
							causes a lot of re-renders. I’m still not sure this is the right
							way to sort items because I don't feel that I take advantage of
							having a global state. (I need to try different ways.)
						</li>
						<li>
							The sorting buttons’ layout looks quite different in between a
							mobile and a desktop version. One has an independent section and
							the other sits inside of the last <code>div</code> of the list. I
							realized that I can’t control this with CSS, so with
							<code>react-responsive</code> I could control which element should
							be rendered based on the screen size.
						</li>
						<li>
							I’d never tried to implement a drag and drop feature before this.
							I needed to do some research about this. First I tried to
							implement this with only hooks but it was a little complicated and
							hard for me to understand how it works. Due to this short
							timeframe I decided to rely on <code>react-beautiful-dnd</code>. I
							still need time to master how to use this, but at least I could
							manage to implement a drag and drop feature.
						</li>
					</ol>
				</p>
			);
		},
		isReady: true,
		period: '1 week',
		responsibilities: 'Front-end',
		image: TodoDemo,
		website: 'https://react-todo-app-snowy.vercel.app',
		source_code: 'https://github.com/shiv-chan/react-todo-app',
	},
	{
		title: 'Title 2',
		thumbnail:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		icons: [
			['Figma', FigmaIcon],
			['React', ReactIcon],
			['Sass', SassIcon],
		],
		short_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		long_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		isReady: true,
		period: '3 months',
		responsibilities: 'Design, Front-end(The entire page)',
		image:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		website: '',
		source_code: '',
	},
	{
		title: 'Title 3',
		thumbnail:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		icons: [
			['Figma', FigmaIcon],
			['React', ReactIcon],
			['Sass', SassIcon],
		],
		short_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		long_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		isReady: false,
		period: '3 months',
		responsibilities: 'Design, Front-end(The entire page)',
		image:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		website: '',
		source_code: '',
	},
	{
		title: 'Title 4',
		thumbnail:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		icons: [
			['Figma', FigmaIcon],
			['React', ReactIcon],
			['Sass', SassIcon],
		],

		short_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		long_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		isReady: false,
		period: '3 months',
		responsibilities: 'Design, Front-end(The entire page)',
		image:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		website: '',
		source_code: '',
	},
	{
		title: 'Title 5',
		thumbnail:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		icons: [FigmaIcon, ReactIcon, SassIcon],
		short_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		long_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		isReady: false,
		period: '3 months',
		responsibilities: 'Design, Front-end(The entire page)',
		image:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		website: '',
		source_code: '',
	},
];

export default projectsData;
