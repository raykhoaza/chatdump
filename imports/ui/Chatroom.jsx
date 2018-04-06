import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Link, Redirect, Switch, withRouter } from 'react-router-dom';
import {Chatrooms} from '../api/Chatroom.jsx'

class Chatroom extends Component{
  renderRoomUsers(){
    let { roomUsers } = this.props;
    return roomUsers.map((user, i) => {
      return <div key = {i}>
        -{user}
      </div>
    });
  }

  render(){
    let { roomOwnerName } = this.props;
    return <div>
      Room ID: {this.props.roomId} <br/>
      Room Name: {this.props.roomName} <br/>
      Room Creator: {this.props.roomOwnerName != null && 
        roomOwnerName.toString() 
      }<br/>
      Room Users: <br/>
      {this.props.roomUsers != null && 
        this.renderRoomUsers()
      }
      </div>
  }
}

export default withTracker(props => {
  let roomId = props.match.params.roomId;
  let room = Chatrooms.findOne({_id: roomId}) ? Chatrooms.findOne({_id: roomId}) : {};
  let roomName = room.roomName;
  let roomUsers = room.users;
  let roomOwnerId = room.ownerId;
  let roomOwnerName = Meteor.users.findOne({_id: roomOwnerId}) ? Meteor.users.findOne({_id: roomOwnerId}).username : {};
  let currentUser = Meteor.user() ? Meteor.user() : {};
  return {
    currentUser,
    roomName,
    roomId,
    roomUsers,
    roomOwnerName
  };
})(Chatroom);