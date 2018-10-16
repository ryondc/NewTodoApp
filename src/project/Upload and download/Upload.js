import React from "react";
import "./Upload.css";

export class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      img: "",
      download: ""
    };
  }

  onChange(e) {
    e.preventDefault();
    var reader = new FileReader();
    // var file = e[0]; // choose the first one from the list of files
    reader.onload = () => {
      this.setState({
        img: reader.result
      });
      // console.log(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  upload(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3001/upload");
    // xhttp.onload = (){

    // }
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhttp.send(
      JSON.stringify({
        imageData: this.state.img
      })
    );
  }

  download(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3001/download");
    xhttp.getAllResponseHeaders(
      "Content-Type",
      "application/json;charset=UTF-8"
    );

    xhttp.onload = () => {
      var data = JSON.stringify(xhttp.responseText);

      this.setState({
        download: data
      });
    };

    xhttp.send();
    console.log(this.state.download);
  }

  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/*"
          id="file"
          onChange={e => this.onChange(e)}
        />
        <button onClick={e => this.upload(e)}>Upload</button>
        <button onClick={e => this.download(e)}>Download</button>
        <div className="containerDiv">
          <img id="output" src={this.state.img} alt="" />
        </div>
        <div id="containerDiv1" />
        <a href={this.state.download}>Link-Download</a>
      </div>
    );
  }
}
