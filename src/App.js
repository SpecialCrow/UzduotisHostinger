import Chatkit from "@pusher/chatkit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Message from "./components/Message";
import MessageList from "./components/MessageList";

import RoomList from "./components/RoomList";
import SendMessageForm from "./components/SendMessageForm";

import { tokenUrl, instanceLocator, roomId } from "./config";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masyvas: []
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="columns">
          <div className="row">
            <div className="col-md-4 ">
              <RoomList masyvas={this.state.masyvas} />
            </div>
            <div className="col-md-8">
              <MessageList />
              <SendMessageForm data={"Vidmuha"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
