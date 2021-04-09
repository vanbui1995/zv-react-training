import React from "react";
import Modal from "./Components/Modal";
import "./task3.css";

export default class Task3 extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  logKey = (e) => {
    if (this.state.showModal) {
      console.log(e.key + " " + e.code);
    }
  };

  componentDidMount() {
    window.addEventListener("keypress", this.logKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.logKey);
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
        <h1>Hello</h1>
        <button onClick={this.show}>Open Modal</button>
        <Modal
          result={this.state.showModal}
          resultM={this.state.showModal}
          click={this.hide}
        >
          <p>Hello, write something you like by press keyboard</p>
          <button onClick={this.hide}>Close</button>
        </Modal>
      </div>
    );
  }
}
