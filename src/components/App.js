import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Home = () => (
  <>
    <h1>Home</h1>
    <ul>
      <li>
        
      </li>
    </ul>
  </ >
);

const About = ({ match }) => {
  console.log(match);
  return <h1>About {match.params.name}</h1>;
};
// const About = () => (
//   <h1>About</h1>
// );

About.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ name: PropTypes.string.isRequired })
  }).isRequired
};

// const Contact = () => (
//   <h1>Contact</h1>
// );

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
  //return <h1>Hello World</h1>;
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/about/:name" component={About} />
        {/* <Route path="/contact" component={Contact} />
        <Route path="/color/:color" component={Color} />

        <Route exact path="/location" component={LocationSearch} />
        <Route path="/location/:woeid" component={Forecast} /> */}
      </Switch>
    </Router>
  );
}
