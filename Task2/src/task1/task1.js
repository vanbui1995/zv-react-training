import React from "react";
import "./task1.css";
import Modal from "./Components/Modal";

export default class Task1 extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <React.Fragment>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Hello</p>
          <p>Bye!</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </React.Fragment>
    );
  }
}
