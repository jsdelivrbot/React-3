import React from 'react';
import api from '../utils/api.js';
import queryString from 'query-string';

class Result extends React.Component{

  constructor(props){
    super(props);

    this.state={
      winner:null,
      loser:null,
      error:null,
      loading:true
    };
  }
  componentDidMount() {
    let players = queryString.parse(this.props.location.search);
    console.log('Players:',players);

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((results)=> {
      console.log(results);
    });
  }

  render(){
    let winner = this.state.winner;
    let loser = this.state.loser;
    let error = this.state.error;
    let loading = this.state.loading;

    if(loading === true){
      return <p>Loading</p>;
    }

    return(
      <div>
        Results....
      </div>
    );
  }
}

export default Result;
