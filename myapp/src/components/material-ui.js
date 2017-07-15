import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import FontIcon from 'material-ui/FontIcon';
import BottomNavigation from 'material-ui/BottomNavigation';
import BottomNavigationItem from 'material-ui/BottomNavigation/BottomNavigationItem';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import RestoreIcon from 'react-material-icons/icons/action/restore';
import FavouriteIcon from 'react-material-icons/icons/action/favorite';

const recentsIcon = <RestoreIcon />;
const favoritesIcon = <FavouriteIcon />;
const nearbyIcon = <IconLocationOn />;


const style = {
  margin: 12
};

class Mui extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0
    };

    this.select=this.select.bind(this);
  }

  select(index) {
      this.setState({selectedIndex: index});
  }



  render(){
    return(
     <MuiThemeProvider>
      <div>
         <AppBar
           zDepth={5}
           title="Title"
           iconClassNameRight="muidocs-icon-navigation-expand-more"
         />

          <br />
          <br />
          <TextField
            hintText="Username"
          /><br />
          <TextField
            hintText="Password"
            type="password"
          /><br />

         <DatePicker hintText="Portrait Inline Dialog" container="inline" />

         <RaisedButton label="Submit" primary={true} style={style} />

         <Paper zDepth={5}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
              onTouchTap={this.select(0)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onTouchTap={this.select(1)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onTouchTap={this.select(2)}
            />
          </BottomNavigation>
        </Paper>

      </div>
      </MuiThemeProvider>
    );
  }
}

export default Mui;

