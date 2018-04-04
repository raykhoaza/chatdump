import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  createRoom(event){
    
  }

  render() {
    return <div>
      <div className="header">
        This is the home page!
      </div>
      <h1> Create Room </h1>
      <form onSubmit={this.createRoom.bind(this)}>
        <div>
          <input onChange={ (e) => this.setState({ roomname: e.target.value }) } type="text" placeholder="roomname" required/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  }
}

export default withTracker(() => {
  return {
  };
})(Home);