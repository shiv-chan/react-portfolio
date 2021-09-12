// icons
import FigmaIcon from './assets/icons/icons-figma.svg';
import ReactIcon from './assets/icons/icons-react.svg';
import SassIcon from './assets/icons/icons-sass.svg';
import ReduxIcon from './assets/icons/icons-redux.svg';
import FirebaseIcon from './assets/icons/icons-firebase.svg';
import OpenWeather from './assets/icons/openweather.png';
import Squarespace from './assets/icons/icons-squarespace.svg';
import Html from './assets/icons/icons-html5.svg';
import Css from './assets/icons/icons-css3.svg';
import JavaScript from './assets/icons/icons-javascript.svg';
import Yelp from './assets/icons/icons-yelp.svg';
import GoogleMap from './assets/icons/icons-google-maps.svg';

// images
import TodoDemo from './assets/react-todo-app-demo.gif';
import TodoThumbnail from './assets/react-todo-app-tn.png';
import WeatherDemo from './assets/weather-app-demo.gif';
import WeatherThumbnail from './assets/weather-app-tn.png';
import PortfolioThumbnail from './assets/portfolio-tn.png';
import PuppyTimeThumbnail from './assets/puppytime-tn.gif';
import PuppyTimeTop from './assets/puppytime-top.gif';
import PuppyTimeDetails from './assets/puppytime-details.png';
import PuppyTimeMobile from './assets/puppytime-mobile-demo.gif';
import BubbleTeaHuntThumbnail from './assets/bubble-tea-hunt-tn.png';
import BubbleTeaHuntDemo from './assets/bubble-tea-hunt-demo.gif';

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
					<p>A weather applicaiton built with React, Redux, and SCSS.</p>
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
							container wrapper in <code>App.js</code>.
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
		thumbnail: PortfolioThumbnail,
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
		title: 'Bubble Tea Hunt',
		thumbnail: BubbleTeaHuntThumbnail,
		icons: [
			['JavaScript', JavaScript],
			['Yelp Fusion', Yelp],
			['Maps API', GoogleMap],
			['CSS', Css],
			['HTML', Html],
		],

		short_description:
			'You can search bubble tea places on Yelp by location. This app also shows the places on Google Maps.',
		long_description: function () {
			return (
				<>
					<p>This personal project was a practice to manipulate APIs.</p>
					<p>
						With Yelp Fusion API, this application fetches and shows all bubble
						tea places' information on Yelp besed on the location that the user
						inputs on a search bar.
						<br />
						Also, the information is passed to <code>map.js</code>, which
						creates Google Maps and populates pins on the map. Therefore, the
						user can see the bubble tea places' location on the map.
						<br />
						*Since I used this API for development purposes, the watermark is on
						the map.
					</p>
					<p>The followings are main things I learned through this project.</p>
					<ol>
						<li>
							Fetching the data with HTTP headers.
							<br />
							The most APIs that I'd had till this project lets us append an API
							key as a parameter, but in this case I needed to pass the API key
							with HTTP headers. Therefore, I learned how to config that.
							<br />I also could have a chance to learn how to hide the
							confidential information when pushing the code to GitHub.
						</li>
						<li>
							Referring to the documentation and implementing the new feature.
							<br />I came up with an idea to show all bubble tea places on the
							map while buildin this app. I researched how to make it happen and
							landed the Google Maps API. I wasn't really comfortable with
							reading the documentation but with some examples on the document I
							played with it and tried to manipulate it as I wanted on this app.
							<br />
							Not only Google Maps but also a loading spinner or an infinite
							loop images were the ones that I could implemented based on sample
							codes shared online.
						</li>
					</ol>
				</>
			);
		},
		isReady: true,
		period: '2 weeks',
		responsibilities: 'Design, Front-end',
		image: BubbleTeaHuntDemo,
		website: '',
		source_code: 'https://github.com/shiv-chan/bubble-tea-hunt',
	},
	{
		title: 'Puppy Time Vancouver Website',
		thumbnail: PuppyTimeThumbnail,
		icons: [
			['Squarespace', Squarespace],
			['CSS', Css],
			['JavaScript', JavaScript],
			['HTML', Html],
			['Figma', FigmaIcon],
		],
		short_description:
			'A website of Puppy Time Vancouver, who is a professional animal care service, built with Squarespace.',
		long_description: function () {
			return (
				<>
					<p>
						Puppy Time Vancouver is a professional animal care based in the West
						End/Coal Harbour of Vancouver, BC, Canada.
					</p>
					<p>
						Since they did not have their own website, I designed and built the
						website from scratch discussing with my client and their marketing
						team.
					</p>
					<p>
						In order to enable my client to maintain the website on their own,
						we decided to build this with CMS, which is familiar to my client,
						Squarespace.
					</p>
					<p>
						The landing page looks like a one-page website, but the information
						on each section is limited on purpose.
						<br />
						On the landing page, when each item on the header is clicked the
						page will be scrolled down to the corresponding section of the page.
						On the other hand, on the other pages than the landing page each
						item on the header leads the user to each separeted page.
						<br />I wrote a custom JavaScript to implement this function.
					</p>
					<p>
						In the figure below, those two images on the left are the landing
						page as a whole. You can see the "Services" section under the hero
						image.
						<br />
						The image on the right is the separeted page of "Services". When the
						user clicks each service or "Learn More" button, it leads the user
						to the separated page. The rest of sections work the same way.(A
						laptop/desktop version only)
					</p>
					<img src={PuppyTimeDetails} alt="puppytime-desktop" />
					<p>
						For mobile device, I designed and coded the fixed icons of phone and
						text. When the user taps these icons a phone or sms application will
						start. Thefore, I hid the phone number from the header.
						<br />I implemented these with a custom CSS.
					</p>
					<img src={PuppyTimeMobile} alt="puppytime-mobile" />
				</>
			);
		},
		isReady: true,
		period: '6 months',
		responsibilities: 'Design, Coding',
		image: PuppyTimeTop,
		website: 'https://www.puppytimevancouver.com/',
		source_code: '',
	},
	{
		title: 'Sample',
		thumbnail:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		icons: [
			['JavaScript', JavaScript],
			['CSS', Css],
			['HTML', Html],
		],

		short_description:
			'Amet consequat id quis dolor adipisicing minim enim ut magna exercitation ipsum.',
		long_description: function () {
			return <p>description</p>;
		},
		isReady: false,
		period: '2 weeks',
		responsibilities: 'Design, Front-end',
		image:
			'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		website: '',
		source_code: '',
	},
];

export default projectsData;
