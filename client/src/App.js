import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import RecipePage from './components/recipe/RecipePage';
import CreateRecipe from './components/recipe-form/CreateRecipe';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/recipes/:id" component={RecipePage} />
            <Route exact path="/create-recipe" component={CreateRecipe} />
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
