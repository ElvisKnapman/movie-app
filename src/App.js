import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/index.scss';

// components
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound';
function App() {
	console.log('env', process.env.REACT_APP_API_KEY);
	return (
		<Router>
			<div>
				<header>
					<TopBar />
				</header>
				<main>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/movies/:id" component={MovieDetailsPage} />
						<Route component={NotFound} />
					</Switch>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</Router>
	);
}

export default App;
