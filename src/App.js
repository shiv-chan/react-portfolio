import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import Home from './components/Home';
import Works from './components/Works';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/works" component={Works} />
				<Route path="/works/:projectName" component={ProjectDetail} />
				<Route path="/about" component={About} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
