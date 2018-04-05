import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Link, Redirect, Switch, withRouter } from 'react-router-dom';

class NavBar extends Component{
  logOut(event){
    event.preventDefault();
    Meteor.logout(function(err){ 
      console.log(err);
    });
  }

  renderSignUp(){
    if(this.props.currentUser._id == null && this.props.path != "/signup"){
      return <div>
        <Link className="signup-button" to="/signup">
          SIGNUP
        </Link>
      </div>
    }
  }
  renderLoginLogout(){
    if(this.props.currentUser._id == null && this.props.path != "/login"){
      return <div>
        <Link className="login-button" to="/login">
          LOGIN
        </Link>
      </div>
    } else if(this.props.currentUser._id != null){
      return <div>
        <button 
          className="logout-button" 
          onClick={this.logOut.bind(this)}>
          LOGOUT
        </button>
      </div>
    }
  }
  render(){
    return <div>
      <div>
        Current User: {this.props.currentUser.username}
      </div>
      <div>
        {this.renderSignUp()}
      </div>
      <div>
      {this.renderLoginLogout()}
      </div>
    </div>
  }
}


export default withTracker(() => {
  let currentUser = Meteor.user() ? Meteor.user() : {};
  return {
    currentUser,
  };
})(NavBar);
