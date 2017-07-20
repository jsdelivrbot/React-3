import React from 'react';
import '../../style/style.css';

class Searchbar extends React.Component{

  constructor(props){
    super(props);

    this.state={term:''};
  }

  render(){
    return(
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />

      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}

export default Searchbar;
