import React from "react";
import "./ProgressApp.css";

export class Progress extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      number: 0,
      text: ""
    };
  }

  getValue(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  Process(input) {
    var numberTemp = Number(input);
    if (numberTemp > 100) {
      return 0;
    }
    this.setState({
      number: numberTemp
    });
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage() {
    //???
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    //??
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    //???
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    return (
      <div>
        <p>PROGRESS-BAR-APP</p>
        <div className="bar">
          <span className="bar_fill" style={{ width: `${this.state.number}%` }}>
            {this.state.number}%
          </span>
        </div>

        <input
          id="text_value"
          type="text"
          placeholder="Type Here"
          onChange={e => this.getValue(e)}
        />
        <input
          className="submit"
          type="submit"
          value="load"
          onClick={event => this.Process(this.state.inputText, event)}
        />
      </div>
    );
  }
}
