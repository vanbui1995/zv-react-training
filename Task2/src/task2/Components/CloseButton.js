import React from "react";

export default class CloseButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClose}>Close</button>
      </div>
    );
  }
}
