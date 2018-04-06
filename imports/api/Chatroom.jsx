import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Chatrooms = new Mongo.Collection('chatrooms');

Meteor.methods({
  'chatrooms.insert'(roomName, ownerId) {
    Chatrooms.insert({
      roomName: roomName,
      users: [ownerId],
      ownerId: ownerId,
      createdAt: new Date()
    });
  }
});