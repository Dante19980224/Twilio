import React, { Component } from "react";
import axios from "axios";
// import "./inbox.css"


class SendSMS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    }
  }

  // componentDidMount(){
    
  // }

  updateMessageValue(event){
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit(event){
    this.postMessage(this.state.message);
    event.preventDefault();
  }

  async postMessage(message){
    let postBody = {
      message: message
    }
    const postReq = await axios.post("http://localhost:4000/mainTwilio", postBody);
    console.log("sent message is: ", message);
    console.log("postReq is: ", postReq);
  }

  render(){
    let body = null;

    body = (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Message:
            <input type="text" value={this.state.message} onChange={this.updateMessageValue.bind(this)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
    return body;
  }
}

export default SendSMS;