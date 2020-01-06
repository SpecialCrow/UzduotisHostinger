import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SendMessageForm from "./SendMessageForm";
import Searchbar from "./Searchbar";

export default class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newItem: "",
      search: []
    };
  }

  updateRoom(input) {
    this.setState({
      newItem: input
    });
  }
  addRoom(Value) {
    const newItem = {
      id: Date.now(),
      value: Value
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: ""
    });
  }
  subscribeRoom() {
    this.setState({
      list: []
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="cont">
        <div className="input-group mb-3 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Create room"
            value={this.state.newItem}
            onChange={e => this.updateRoom(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-dark"
              type="button"
              id="button-addon2"
              onClick={() => this.addRoom(this.state.newItem)}
            >
              Create
            </button>
          </div>
        </div>
        <div className="search">
          <Searchbar items={this.state.list} />
        </div>

        <div className="rooms">
          <span>Your rooms:</span>
          <div className="room-list">
            <Router>
              <Link to="/admin">
                <h2>AdminRoom</h2>
              </Link>
              <Link to="/vartotoju">
                <h2>Vartotoju</h2>
              </Link>
            </Router>
            {this.state.list.map(item => {
              return (
                <div key={item.id}>
                  <a href="#">{item.value} &nbsp;</a>
                </div>
              );
            })}
            <ul>
              {this.state.search.map(item => (
                <li key={item.id}>{item.value} &nbsp;</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
