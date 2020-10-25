import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/index.scss';

// components
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import TopBar from './components/TopBar/TopBar';
function App() {
  return (
    <Router>
      <div>
        <header>
          <TopBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:id" component={MovieDetailsPage} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
