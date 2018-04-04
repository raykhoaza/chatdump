import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Chatrooms = new Mongo.Collection('chatrooms');

Meteor.methods({
  'chatrooms.insert'(roomName) {
    Chatrooms.insert({
      roomName: roomName,
      users: [],
      roomCreator,
      createdAt: new Date()
    });
  }
});