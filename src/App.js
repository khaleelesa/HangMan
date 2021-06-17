import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score";
import Letters from "./components/Letters";
import Solution from "./components/Solution";
class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: true,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: true,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: true,
        Z: false,
      },
      // letterStatus: this.generateLetterStatuses(),
      solution: { word: "BYTES", hint: "this is your hint" },
      score: 100,
    };
  }
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution}
        />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
