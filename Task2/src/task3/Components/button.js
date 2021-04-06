import React from "react";
import Modal from "../Components/modal";

export default class Button extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.show}>Start</button>
        <Modal result={this.props.result}>
          <p>{this.props.message}</p>
          <button onClick={this.props.hide}>Close</button>
          <button onClick={this.props.stop}>Stop</button>
        </Modal>
      </React.Fragment>
    );
  }
}
