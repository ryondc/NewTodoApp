import React from "react";
import "./Regex.css";
import { Button } from "../../button/button";

export class Regex extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: 0,
      address: "",
      nameRender:"",
      emailRender:"",
      phoneRender:0,
      addressRender:"",
    };
  }

  userName(input) {
    this.setState({
      name: input
    });
  }

  userEmail(input) {
    this.setState({
      email: input
    });
  }

  userPhone(input) {
    var numberTemp = Number(input);
    this.setState({
      phone: numberTemp
    });
  }

  userAddress(input) {
    this.setState({
      address: input
    });
  }

  onCallRegex(e) {
    e.preventDefault();
    var nameRex = /^[a-z]+[ ]?[a-z]+$/i;
    var emailRex = /^[A-Za-z]+@[a-z0-9]+\.[a-z]+$/i;
    var phoneRex = /^\d{10}$/i;
    var addressRex = /^[a-z0-9]+[ ]?[a-z]+$/i;


    if (nameRex.test(this.state.name)===true) {
      this.setState({
        nameRender: this._render(this.state.name)
      })

    }

    if (emailRex.test(this.state.email)===true) {
      this.setState({
        emailRender:this._render(this.state.email)
      })

    }

    if (phoneRex.test(this.state.phone)===true) {
      this.setState({
        phoneRender:this._render(this.state.phone)
      })
    }

    if (addressRex.test(this.state.address)===true){
      this.setState({
        addressRender:this._render(this.state.address)
      })
    }

    else{
      alert("wrong please try again");
    }
  }

  _render(element){
    return <p>{element}</p>
  }

  render() {
    return (
      <div>
        <p>ReGex</p>
        <p>Please Fill Your Information As The Example Below</p>
        <input
          className="input-regex"
          onChange={e => this.userName(e.target.value)}
          type="text"
          placeholder="Name-Example:Trần Chí Dũng"
        />
        <input
          className="input-regex"
          onChange={e => this.userEmail(e.target.value)}
          type="text"
          placeholder="Email-Example:ryondc@gmail.com"
        />
        <input
          className="input-regex"
          onChange={e => this.userPhone(e.target.value)}
          type="text"
          placeholder="Phone-Example:01265230318"
        />
        <input
          className="input-regex"
          onChange={e => this.userAddress(e.target.value)}
          type="text"
          placeholder="Address-Example:492/10 tân phước"
        />
        <Button onClick={e=>this.onCallRegex(e)}>Check</Button>
  <div>
    <p>The True Result Will Appear Here</p>
    {this.state.nameRender}
    {this.state.emailRender}
    {this.state.phoneRender}
    {this.state.addressRender}
    </div>
      </div>
    );
  }
}
