import React from "react";
import Modal from "../Components/modal";

export default class Button extends React.Component {
  render() {
    const showStop = this.props.showHide ? "show" : "hide";
    const showResume = !this.props.showHide ? "show" : "hide";
    return (
      <React.Fragment>
        <button onClick={this.props.show}>Start</button>
        <Modal result={this.props.result}>
          <p>{this.props.message}</p>
          <button onClick={this.props.hide}>Close</button>
          <button className={showStop} onClick={this.props.stop}>
            Stop
          </button>
          <button className={showResume} onClick={this.props.resume}>
            Resume
          </button>
        </Modal>
      </React.Fragment>
    );
  }
}
