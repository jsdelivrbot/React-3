import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className = "jumbotron">
         <p>
          <h2> This application uses following Technologies:</h2>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default About;


