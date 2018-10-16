import React from "react";
import "./AutoComplete.css";

export class AutoComplete extends React.Component {
  constructor() {
    super();
    this.state = {
      information: [
        "AMERICA",
        "BRITAIN",
        "FRANCE",
        "VIETNAM",
        "KOREA",
        "JAPAN",
        "SPAIN",
        "PORTUGAL",
        "ASUS",
        "HP",
        "CALCULATOR",
        "TY",
        "COUNCIL",
        "SUPPERMAN",
        "BATMAN",
        "KILLER",
        "MURDER",
        "HANGOVER",
        "BLUE",
        "RED",
        "YELLOW",
        "HEAD",
        "FEET",
        "FOOD",
        "SEA",
        "TINY",
        "BIG"
      ],
      inputText: "",
      mode: true
    };
  }

  getValue(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  // addArray() {
  //   var newArray = [];
  //   for (var i = 0; i < this.state.information.length; i++) {
  //     newArray.push(<div key={i}>{this.state.information[i]}</div>);
  //   }
  //   return newArray;
  // }

  match(str) {
    //????? tại sao không cần hàm addArray mà nó vẫn hiện lên full list trong khi nếu có hàm addArray thì hàm str sẽ k hiện lên
    var matchArray = [];
    str = str.toLowerCase();
    if (str !== "") {
      for (var i = 0; i < this.state.information.length; i++) {
        if (this.state.information[i].toLowerCase().startsWith(str)) {
          matchArray.push(<div key={i}>{this.state.information[i]}</div>);
        }
      }
      return matchArray;
    }
  }

  onDisplay() {
    if (this.state.inputText !== "") {
      return {
        display: "block"
      };
    }
  }

  render() {
    return (
      <div>
        <p>AutoComplete</p>
        <form className="autocomplete">
          <input
            style={{ width: "100%" }}
            className="none-border"
            type="text"
            placeholder="Please write here"
            onChange={e => this.getValue(e)}
          />
          <input className="search_button" type="submit" value="Search" />
          <div className="dialog" style={this.onDisplay()}>
            {/* {this.addArray()} */}
            {this.match(this.state.inputText)}
          </div>
        </form>
      </div>
    );
  }
}
