/**
 * ChatApp功能：
 * 1. 发送消息
 * 2. 展示已发送的消息列表
 * 3. 显示时间（Hoc）
 */

import React from "react";
import withTimer from "../c06/withTimer";

class MessageList extends React.PureComponent {
  render() {
    return <ul>
      {
        this.props.messages.map((msg, index) =>
          <li key={index}>{msg}</li>
        )
      }
    </ul>;
  }
}

export class ChatApp extends React.Component {
  state = {
    messages: [],
    inputMsg: "",
  };

  handleInput = evt => {
    this.setState({
      inputMsg: evt.target.value,
    });
  };

  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      const newMessages = [...this.state.messages, text];
      this.setState({
        messages: newMessages,
        inputMsg: "",
      });
    }
  };

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <div>
          <input value={this.state.inputMsg} onChange={this.handleInput} />
          <button onClick={this.handleSend}>Send</button>
        </div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

export default withTimer(ChatApp);
