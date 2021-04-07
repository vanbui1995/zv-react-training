import React from "react";
import Modal from "./Components/Modal";
import CloseButton from "./Components/CloseButton";
import "./task2.css";

export default class Task2 extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  show = () => {
    this.setState({
      showModal: true
    });
  };

  hide = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.show}>Click here</button>
        <br />
        <Modal
          result={this.state.showModal}
          resultM={this.state.showModal}
          click={this.hide}
        >
          <span className="text">Hello {""}</span>
          <CloseButton handleClose={this.hide} />
        </Modal>
      </div>
    );
  }
}
