// icons
import FigmaIcon from './assets/icons/icons-figma.svg';
import ReactIcon from './assets/icons/icons-react.svg';
import SassIcon from './assets/icons/icons-sass.svg';
import ReduxIcon from './assets/icons/icons-redux.svg';
import FirebaseIcon from './assets/icons/icons-firebase.svg';
import OpenWeather from './assets/icons/openweather.png';

// images
import TodoDemo from './assets/react-todo-app-demo.gif';
import TodoThumbnail from './assets/react-todo-app-tn.jpg';
import WeatherDemo from './assets/weather-app-demo.gif';
import WeatherThumbnail from './assets/weather-app-tn.jpg';

const projectsData = [
	{
		title: 'Weather App',
		thumbnail: WeatherThumbnail,
		icons: [
			['React', ReactIcon],
			['Redux', ReduxIcon],
			['Weather API', OpenWeather],
			['Sass', SassIcon],
		],
		short_description:
			'This is a weather applicaiton built with React, Redux, and SCSS. This app fetches the weather data using Weather API by OpenWeather.',
		long_description: function () {
			return (
				<>
					<p>
						This is a weather applicaiton built with React, Redux, and SCSS.
					</p>
					<p>
						This app fetches the weather data using{' '}
						<a href="https://openweathermap.org/api" alt="open-weather">
							Weather API
						</a>{' '}
						by OpenWeather.
					</p>
					<p>
						I built this app in two ways; one is with React <code>context</code>
						and the other one is with Redux to access to a weather data
						throughout the app. There are <code>context</code> branch for React
						<code>context</code>, and <code>main</code>, <code>redux</code>
						branch for Redux in the GitHub repository.
					</p>
					<p>
						Building a weather app was one of my assignments in college. First,
						I built the one with vanilla JavaScript. As I learned React, I
						started to convert the project into the one with React. At that
						time, (even now) it's hard for me to tell when to use either React
						context or Redux.
					</p>
					<p>
						This one is a kind of an experiment project to see how the code
						would be different between with React <code>context</code> and with
						Redux. I learned that it's possible to do the same thing in either
						way, but in this project I felt Redux can make the code more
						readable and makes it easier to understand the structure for me.
					</p>
					<p>
						I started this process with by using the{' '}
						<code>create-react-app</code> boilerplate, then adding{' '}
						<code>@reduxjs/toolkit</code> and <code>react-redux</code> for Redux
						version. Also, I installed <code>sass</code> and{' '}
						<code>node-sass</code> to utilize SASS for styling.
					</p>
					<p>Here are obstacles that I ran into through this project.</p>
					<ol>
						<li>
							This app gets the name of city from the value of input and passes
							the string to API as a parameter. I wasn't really comfortable to
							use <code>createAsyncThunk</code> at that time so I got stuck here
							a bit. I learned that <code>createAsynThunk</code>'s second
							parameter which is <code>payloadCreator</code> could have two
							arguments and the first one is a value passing to the action
							creator when dispathed. Therefore, I had the dispatcher like the
							following{' '}
							<code>{`dispatch(fetchWeather({ city: nameOfCity }));`}</code> and
							the action creator like this{' '}
							<code>{`fetchWeather = createAsyncThunk('weather/fetchWeather', async ({ city }) => {...})`}</code>
							.
						</li>
						<li>
							The background of this app changes depends on the weather. First I
							have no idea how to change CSS style based on the weather data.
							Weather API provides with weather icon code, so I created the
							function <code>iconClassName</code> that can generate a class name
							based on the icon code. Then, passing the class name to the
							container wrapper in <code>App.js</code> like the following:
							<br />
							{/* <code>
								{
									// eslint-disable-next-line no-template-curly-in-string
									"className = { `container ${ weather !== null ? iconClassName(weather.weather[0].icon) : '' } `}"
								}
							</code> */}
							<br />
							Also, created the scss file to style the background based on each
							class name.
						</li>
					</ol>
				</>
			);
		},
		isReady: true,
		period: '3 weeks',
		responsibilities: 'Design, Front-end',
		image: WeatherDemo,
		website: 'https://react-weather-app-peach-mu.vercel.app/',
		source_code: 'https://github.com/shiv-chan/react-weather-app',
	},
	{
		title: 'Todo App',
		thumbnail: TodoThumbnail,
		icons: [
			['React', ReactIcon],
			['Redux', ReduxIcon],
			['Sass', SassIcon],
		],
		short_description: 'A todo application built with React, Redux, and SCSS.',
		long_description: function () {
			return (
				<>
					<p>
						This application is one of the challenges on{' '}
						<a href="https://www.frontendmentor.io/" alt="fronend-mentor">
							Frontend Mentor
						</a>{' '}
						which provides the users with the overview of the application and
						its design.
					</p>
					<p>
						<a
							href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
							alt="frontend-mentor-challenge"
						>
							Here
						</a>{' '}
						is the challenge for this project.
					</p>
					<p>
						I set a week timeframe for this personal project. This was a
						challenge for myself to be able to command <code>redux</code> from
						scratch.
					</p>
					<p>
						Before I started to work on this, I had been in a “tutorial hell”.
						To get out of the hell, I decided to build this application without
						referring to any other source codes or a tutorial video. (I believe
						there are some tutorial videos about this particular challenge since
						Frontend Mentor is getting popular!)
					</p>
					<p>
						I started this process by putting the following command
						<code>npx create-react app react-todo-app --template redux</code>,
						which is creating a redux + plain JS boilerplate. Also, I installed
						<code>sass</code> and <code>node-sass</code> to utilize SASS for
						styling. Since I’m still learning and in the process of getting used
						to <code>redux</code>, figuring out which one should be a global
						state was very tough overall. There are main challenges I had on
						this project.
					</p>
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
						<li>
							When hovoring over or touching each todo items, the cross icon
							appears on the left end.
							<br />
							First, I created the state that tells a todo item is hovered or
							not and set the condition to detect it should be shown or not with
							a ternary operator in cross icons. However, with that solution
							every cross icons appear and disappear at the same time once one
							of todo items gets hovered or touched.
							<br />
							Therefore, I set the following
							<code>e.currentTarget.children[3]</code> in each todo items
							<code>div</code> to target cross icon which is the third child of
							each item. Then, add <code>classList</code>
							<code>add()</code>, <code>remove()</code>, <code>toggle()</code>
							methods to manipulate the styling with a class name.
						</li>
					</ol>
				</>
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
		title: 'Portfolio Website',
		thumbnail:
			'https://user-images.githubusercontent.com/51708229/132110667-7a129171-ee3f-4cd0-815d-bba3c2a7e2d9.png',
		icons: [
			['React', ReactIcon],
			['Sass', SassIcon],
			['Firebase', FirebaseIcon],
			['Figma', FigmaIcon],
		],
		short_description:
			"A website that showcases the projects and introduces myself, bulit with React and SCSS. I'm using Firebase to host the website.",
		long_description: function () {
			return (
				<>
					<p>
						This is a website that showcases the projects and introduces myself,
						bulit with React and SCSS.
						<br />
						I'm using Firebase to host the website.
						<br />I designed a whole website myself with Figma.
					</p>
					<p>
						This project was a part of assignments in my college. I already had
						my portfolio site buit with HTML, CSS, and Vanilla JavaScript, but I
						wanted to tried to create the one with React which I just started to
						learn around then, especially <code>context</code> API and
						<code>react router</code>. I started this process with by using the
						<code>create-react-app</code> boilerplate, then adding
						<code>react-router-dom</code>. Also, I installed <code>sass</code>{' '}
						and
						<code>node-sass</code> to utilize SASS for styling.
					</p>
					<p>
						I wanted to update my portfolio site easily, especially "Work"
						section , so I created <code>projectsData.js</code> which has an
						array of all my projects' information. Once I update the array in
						the file, "Work" section will be updated. This project is also for
						expeliment to use <code>context</code> API, so I passed the data to
						all components as <code>context</code>.
					</p>
					<p>I learned some new things through this project.</p>
					<ol>
						<li>
							How to handle parameters with <code>useParams()</code> and show
							each pages.
							<br />I liked that I implement the function{' '}
							<code>convertTitleToParams</code> which conevrts the project title
							string to the parameter formed(hyphenated) string.
							<br />
							e.g.) Todo App -&gt; todo-app
						</li>
						<li>I need to import images to use them in JSX.</li>
						<li>
							How to host the website with Firebase.
							<br />
							This is the most challenging thing to finish this project. I
							should have had a knowladge of yml to configure the setting of
							Firebase Hosting. I connected Firebase to GitHub, so everytime I
							commit to <code>main</code> it will be build and deploy
							automatically. It's easy to update the website.
						</li>
					</ol>
				</>
			);
		},
		isReady: true,
		period: '3 weeks',
		responsibilities: 'Design, Front-end',
		image:
			'https://user-images.githubusercontent.com/51708229/132110667-7a129171-ee3f-4cd0-815d-bba3c2a7e2d9.png',
		website: 'https://kahoshibuya.dev',
		source_code: 'https://github.com/shiv-chan/react-portfolio',
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
