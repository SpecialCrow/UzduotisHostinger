import React, { Component } from "react";
import { tsConstructorType } from "@babel/types";

export default class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  UpdateInput(input) {
    this.setState({
      newItem: input
    });
  }
  addItem(Value) {
    if (Value !== null) {
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
  }

  render() {
    console.log(this.state.list);
    return (
      <div>
        <div className="send d-flex">
          <input
            type="text"
            className="form-control "
            placeholder="Enter the message"
            aria-describedby="basic-addon1"
            value={this.state.newItem}
            onChange={e => this.UpdateInput(e.target.value)}
          />
          <button
            className="btn btn-secondary"
            onClick={() => this.addItem(this.state.newItem)}
          >
            Send
          </button>
        </div>
        <div className="message-list">
          <div className="chat-panel">
            <div className="row">
              <div className="col-md-3">
                <div className="chat-bubble chat-bubble--left">
                  {this.state.list.map(item => {
                    return (
                      <div key={item.id}>
                        <form>
                          <div className="message-username">
                            {this.props.data}
                          </div>

                          <div className="message-text">{item.value}</div>
                        </form>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
