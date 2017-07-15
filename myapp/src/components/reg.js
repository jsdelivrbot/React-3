import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

const style = {
  margin: 12,
  customWidth: { width: 200 }
};

class SignUp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: 1};
    this.state={
      name:'',
      username:'',
      password:'',
      date:''
    }

    this.handleChange=this.handleChange.bind(this);
    this.nameChange=this.nameChange.bind(this);
    this.usernameChange=this.usernameChange.bind(this);
    this.passwordChange=this.passwordChange.bind(this);
    this.dateChange=this.dateChange.bind(this);
    this.submit=this.submit.bind(this);
  }

  handleChange (event, index, value){
    this.setState({value});
  }

  nameChange(e){
     this.setState({name: e.target.value})
  }

  usernameChange(e){
    this.setState({name: e.target.value})
  }

  passwordChange(e){
     this.setState({email: e.target.value})
  }

  dateChange(e){
     this.setState({comment: e.target.value})
  }

  submit(e){

    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment
    }

    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      url: '/some/url',
      data: data
    })
      .done(function(data) {
        self.clearForm()
      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });

  }

  render(){
    return(
      <MuiThemeProvider>
        <form action="/add_data" method="POST">
          <div>
            <AppBar
              zDepth={5}
              title="Register Your Self....."
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />

            <br />
            <br />
            <TextField
              hintText="Name"
              floatingLabelText="Enter your Name"
              onChange={this.nameChange}
              value={this.state.name}
            /><br />
            <TextField
              hintText="Username"
              floatingLabelText="Enter your Username"
              onChange={this.usernameChange}
              value={this.state.username}
            /><br />
            <TextField
              hintText="Password"
              type="password"
              floatingLabelText="Enter your Password"
              onChange={this.passwordChange}
              value={this.state.password}
            /><br />

            <DropDownMenu
              value={this.state.value}
              onChange={this.handleChange}
              style={style.customWidth}
            >
              <MenuItem value={1} primaryText="Surat" />
              <MenuItem value={2} primaryText="Ahmadabad" />
              <MenuItem value={3} primaryText="Baroda" />
              <MenuItem value={4} primaryText="Navsari" />
            </DropDownMenu><br />

            <DatePicker
              hintText="Portrait Inline Dialog"
              container="inline"
              onChange={this.dateChange}
              value={this.state.date}
            />

            <RaisedButton label="Submit" primary={true} style={style} onSubmit={this.submit}/>

          </div>
        </form>
      </MuiThemeProvider>
    );
  }
}

export default SignUp;
