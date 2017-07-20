import React from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import Searchbar from './search_bar.js';
import VideoList from './video_list.js';
import VideoDetail from './video_detail.js';

let API_KEY = 'AIzaSyDxJyVaYUGh_nvaYeSX8BRUu6bCdqD-Pc8';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('surfboard');
  }

  videoSearch(term)
  {
    YTSearch({key:API_KEY,term:term},(videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    // Creates a debounced function that delays invoking func until after wait milliseconds
    // have elapsed since the last time the debounced function was invoked

    const videoSearch = _.debounce((term) => { this.videoSearch(term) } , 300);

    return(
      <div>
        <Searchbar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;


