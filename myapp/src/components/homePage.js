import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Link} from 'react-router-dom';
// let Link = Router.Link;

class Home extends React.Component {
  render() {
    return (
      <div className = "jumbotron">
        <h1>Pluralsight Administrator</h1>
        <p>React,React Route and Flux</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default Home;


