import React, { Component } from "react";
import axios from "axios";
// import "./inbox.css"


class GetAllSMS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    }
  }

  componentDidMount(){
    this.getMessages();
  }

  async getMessages(){
    const getReq = await axios.get("http://localhost:4000/getAll");
    console.log("getReq is: ", getReq);
    this.setState({
      messages: getReq.data.messagelist
    })
  }

  render(){
    let body = null;

    body = (
      <div>
        <div>show all messages</div>
        {this.state.messages.map((item, index) => {
          let msg = 
            <div key={index}>
              <p>Message body: {item.body}</p>
              <p>Sent from: {item.from}</p>
              <p>Sent to: {item.to}</p>
              <p>Date sent: {item.dateSent}</p>
              <p>Price: {item.price+item.priceUnit}</p>
              <p>Status: {item.status}</p>
              <hr/>
            </div>;
          return msg;
        })}
      </div>
    );
    return body;
  }
}

export default GetAllSMS;