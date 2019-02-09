import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
// import './App.css';
// import kitten from './kitten.jpg';

const Hello = ({ message }) => <p>{message}</p>;

Hello.propTypes = {
  message: PropTypes.string.isRequired,
};

const App = () => (
  <div className="App">
    <Hello message="Hello from React!" />
    {/* <img src={kitten} alt="" /> */}
  </div>
);

export default hot(App);
