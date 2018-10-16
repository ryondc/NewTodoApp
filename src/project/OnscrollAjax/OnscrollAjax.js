import React from "react";
import "./OnscrollAjax.css";

export class onscrollAjax extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      picture: [],
      newArray: []
    };
  }
  _isMounted = false;
  ajax() {
    var ourRequest = new XMLHttpRequest();
    var self = this;
    var selfRef = this.myRef;
    ourRequest.open("GET", "https://dog.ceo/api/breeds/image/random");
    ourRequest.onload = function() {
      var ourdata = JSON.parse(ourRequest.responseText);
      if (self._isMounted) {
        //?????
        self.setState({
          picture: ourdata
        });
        var Yoffset = window.pageYOffset;
        var y = Yoffset + window.innerHeight;

        var node = selfRef.current; //accessing ref
        var heightContent = node.clientHeight;
      }
      console.log(heightContent);

      if (y >= heightContent) {
        self.ondisplay();
      }
    };
    ourRequest.send();
  }

  componentDidMount() {
    //?????
    this._isMounted = true;
  }
  componentWillUnmount() {
    //????????
    this._isMounted = false;
  }

  ondisplay() {
    this.state.newArray.push(
      <div key={this.state.picture.message}>
        <img alt="" src={this.state.picture.message} />
      </div>
    );
    console.log(this.state.newArray);
  }

  render() {
    return (
      <div className="bigcontainer" ref={this.myRef} onScroll={this.ajax()}>
        <div className="container1">
          <p>Onscroll-Ajax</p>
          <img
            alt=""
            src="http://sohanews.sohacdn.com/thumb_w/660/2018/3/2/photo1519987752563-1519987752587763219784.jpg"
          />
        </div>

        <div className="container1">
          <img
            alt=""
            src="http://sohanews.sohacdn.com/thumb_w/660/2018/3/2/photo1519987752563-1519987752587763219784.jpg"
          />
        </div>

        <div className="container1 ">
          <img
            alt=""
            src="http://sohanews.sohacdn.com/thumb_w/660/2018/3/2/photo1519987752563-1519987752587763219784.jpg"
          />
        </div>

        <div>{this.state.newArray}</div>
      </div>
    );
  }
}
