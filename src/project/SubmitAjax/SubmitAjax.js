import React from "react";
import { Button } from "../../button/button";

export class SubmitAjax extends React.Component {
  constructor() {
    super();
    this.state = {
      picture: [],
      newArray:[]
    };
  }

  submit(event) {
    event.preventDefault();//??? phải thêm mới chạy không là nó auto add hoài
    var ourRequest = new XMLHttpRequest();
    var self = this;
    ourRequest.open("GET", "https://dog.ceo/api/breeds/image/random");
    ourRequest.onload = function() {
      var ourData = JSON.parse(ourRequest.responseText);
      self.setState({
        picture:ourData
      })
        self.ondisplay();
    };
  ourRequest.send();
  }

  ondisplay() {
    this.state.newArray.push(
      <div key={this.state.picture.message}>
        <img alt="" src={this.state.picture.message} />
      </div>
    );
    console.log(this.state.newArray);//khi bấm submit lần đầu [0] không hiển thị chỉ bắt đầu hienr thị từ hình [1]
  }

clear(event){
  event.preventDefault();
  this.setState({
    newArray:[]
  })
}
  render() {
    return (
      <div>
        <Button onClick={event => this.submit(event)}>SubmitAjax</Button>
        <Button onClick={event => this.clear(event)}>Clear</Button>
        <div>
          {this.state.newArray}
        </div>
      </div>
    );
  }
}
