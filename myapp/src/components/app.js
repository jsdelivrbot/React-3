// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

import '../index.css';
import React from 'react';
import YTSearch from 'youtube-api-search';
import {Route,Switch} from 'react-router-dom';
import Popular from './popular.js';
import Nav from './nav.js';
import Home from './home.js';
import Battle from './battle.js';
import Result from './result.js';
import Course from './coursesPage.js';
import SignUp from './reg.js';
// import VideoList from './video_list.js';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={ videos: [] };

    YTSearch({key:API_KEY,term: 'surfboards'},function(data){
      this.setState({videos:data});
      console.log(data);
    });
  }

  render(){
    return(
      <Route>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/result' component={Result} />
            <Route path='/popular' component={Popular} />
            <Route path='/course' component={Course} />
            <Route path='/signup' component={SignUp} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Route>
    );

  //   let friends = this.props.list.filter(function (user){
  //     return user.friend === true;
  //   });
  //
  //   let nonfriends = this.props.list.filter(function (user){
  //     return user.friend !== true;
  //   });
  //
  //   return(
  //     <div>
  //       <h3>Friends</h3>
  //       <ul>
  //         {friends.map(function(user)
  //         {
  //           return(
  //             <li key={user.name}>{user.name}</li>
  //           );
  //         })
  //         }
  //       </ul>
  //
  //       <h3>NonFriends</h3>
  //       <ul>
  //         {nonfriends.map(function(user)
  //         {
  //           return(
  //             <li key={user.name}>{user.name}</li>
  //           );
  //         })
  //         }
  //       </ul>
  //     </div>
  //   );
  }
}

// App.PropTypes = {
//   list: PropTypes.array.isRequired
// };

export default App;


