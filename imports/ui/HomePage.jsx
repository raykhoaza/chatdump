import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Chatrooms } from '../api/Chatroom.jsx';
import { Link, Redirect, Switch, withRouter } from 'react-router-dom';
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
    Meteor.call('chatrooms.insert', roomName, this.props.currentUser._id);
    ReactDOM.findDOMNode(this.refs.roomNameInput).value = '';
    //this.props.history.push('/');
  }

  renderCreateRoom(){
    if(this.props.currentUser._id != null){
      return <div>
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

  renderYourChatrooms(){
    //console.log(this.props.curUserChatrooms);
    if(this.props.currentUser._id != null){
      let { curUserChatrooms } = this.props;
      //console.log(curUserChatrooms);
      return curUserChatrooms.map((room, i) => {
        return <div key = {i}>
          <Link className="room-id" to={`/chatroom/${room._id}`} >
            <strong>{room.roomName}</strong>
          </Link>
        </div>
      });
    }
  }

  render() {
    return <div>
      <div>
        <NavBar path={this.props.match.path}/>
      </div>
      <div className="header">
        <h1>
          This is the home page!
        </h1>
      </div>
      <div>
        {this.renderCreateRoom()}
      </div>
      <div className="your-chatrooms">
        {this.props.currentUser._id != null &&
          <h1>
            This is your chat rooms!
          </h1>
        }
      </div>
      <div>
        {this.renderYourChatrooms()}
      </div>
    </div>
  }
}

export default withTracker(() => {
  let currentUser = Meteor.user() ? Meteor.user() : {};
  let curUserChatrooms = Chatrooms.find({ownerId: currentUser._id}, { sort: { createAt: -1 } }).fetch()
  //console.log(curUserChatrooms);
  return {
    currentUser,
    curUserChatrooms
  };
})(HomePage);