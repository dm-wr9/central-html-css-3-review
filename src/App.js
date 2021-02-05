import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburgerClass: "",
    };
  }

  handleClassChange = () => {
    this.setState({
      hamburgerClass: this.state.hamburgerClass === "" ? "show" : "",
    });
  };

  render() {
    return (
      <div className="App">
        <div className="keyframe box">Keyframe</div>
        <div className="media box">
          <button onClick={this.handleClassChange}>Hamburger</button>
          <ul className={`list ${this.state.hamburgerClass}`}>
            <li>One</li>
            <li>2</li>
            <li>III</li>
            <li>Four</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
