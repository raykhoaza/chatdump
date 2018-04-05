import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Chatrooms } from '../api/Chatroom.jsx';
import ReactDOM from 'react-dom';
import NavBar from './Navbar.jsx';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  createRoom(event){
    event.preventDefault();
    let { roomName } = this.state;
    Meteor.call('chatrooms.insert', roomName);
    ReactDOM.findDOMNode(this.refs.roomNameInput).value = '';
    //this.props.history.push('/');
  }

  render() {
    return <div>
      <div>
        <NavBar path={this.props.match.path}/>
      </div>
      <div className="header">
        This is the home page!
      </div>
      <h1> Create Room </h1>
      <form onSubmit={this.createRoom.bind(this)}>
        <div>
          <input 
            ref="roomNameInput" 
            onChange={ (e) => this.setState({ roomName: e.target.value }) } 
            type="text" 
            placeholder="roomname" required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  }
}

export default withTracker(() => {
  let currentUser = Meteor.user() ? Meteor.user() : {};
  return {
    currentUser,
  };
})(HomePage);