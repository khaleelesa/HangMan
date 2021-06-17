import Letter from "./Letter";
import React, { Component } from "react";

class Letters extends Component {
  renderletters(letters, status) {
    let lettersArr = [];
    for (let letter of letters) {
      if (status[letter]) {
        lettersArr.push(
          <span className="true">
            <Letter letter={letter} />
          </span>
        );
      } else {
        lettersArr.push(
          <span>
            <Letter letter={letter} />
          </span>
        );
      }
    }
    return lettersArr;
  }
  render() {
    let letters = Object.keys(this.props.letterStatus);
    return (
      <div>
        <div>Avalibale letters</div>
        {this.renderletters(letters, this.props.letterStatus).map(
          (letter) => letter
        )}
      </div>
    );
  }
}
export default Letters;
