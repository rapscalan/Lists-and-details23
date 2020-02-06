import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Xfiles from './xfiles/Xfiles';
import XfileDetail from './xfiles/XfileDetail';

const Home = () => (
  <>
    <h1>Home</h1>
    <Xfiles />
  </ >
);

const About = ({ match }) => {
  console.log(match);
  return <h1>About {match.params.name}</h1>;
};

About.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ name: PropTypes.string.isRequired })
  }).isRequired
};

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/Zak">About</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  </header>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about/:name" component={About} /> */}
        <Route path="/xfile/:name" component={XfileDetail} />
      </Switch>
    </Router>
  );
}
