import React, { Component } from "react";
import Letter from "./Letter";
class Solution extends Component {
  setWordLetters(word, letterStatus) {
    let letters_spaces = [];
    for (let i = 0; i < word.length; i++) {
      if (letterStatus[word.charAt(i)]) {
        letters_spaces.push(<Letter letter={word.charAt(i)} />);
      } else {
        letters_spaces.push(" - ");
      }
    }
    return letters_spaces;
  }

  render() {
    let word = this.props.solution.word;
    let letterstatus = this.props.letterStatus;
    return (
      <div className="spaces">
        <div>
          {this.setWordLetters(word, letterstatus).map((item) => (
            <span>{item}</span>
          ))}
        </div>
        <div>
          <em>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}
export default Solution;
