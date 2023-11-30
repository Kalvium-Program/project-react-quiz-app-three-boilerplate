import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div className='home-container'>
        <Link to="/quiz">
        <div className='texts'>
        <h1>Quiz App</h1>
        <button>Play</button>
        </div>
        </Link>
      </div>
    );
  }
}

export default Home;
