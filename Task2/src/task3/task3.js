import React from "react";
import Button from "./Components/button";
import "./task3.css";

export default class Task3 extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.state = {
      value: "",
      showDialog: false,
      message: "",
      showHide: true
    };
  }

  change = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  setCount = () => {};

  showDialog = (e) => {
    e.preventDefault();
    this.setState({
      showDialog: true
    });

    //get value input
    let input = this.state.value;

    if (input === "") {
      this.setState({
        message: "Please input a number"
      });
    } else if (input < 0) {
      this.setState({
        message: "Number must be greater than 0"
      });
    } else if (isNaN(input)) {
      this.setState({
        message: "Invalid input. Must be a number"
      });
    } else {
      //show number immediately
      this.setState({
        message: input
      });

      //decrease number
      this.setCount = setInterval(() => {
        if (input > 0) {
          this.setState({
            message: --input
          });
        }
      }, 500);
    }
  };

  hideDialog = () => {
    clearInterval(this.setCount);
    this.setState({
      showDialog: false,
      message: ""
    });
  };

  //stop decrease number
  stopNumber = () => {
    this.setState({
      showHide: false
    });
    clearInterval(this.setCount);
  };

  resumeNumber = () => {
    this.setState({
      showHide: true
    });
    let input = this.state.message;
    this.setCount = setInterval(() => {
      if (input > 0) {
        this.setState({
          message: --input
        });
      }
    }, 500);
  };

  //focus
  componentDidMount() {
    this.ref.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.ref} onChange={this.change}></input>
        <Button
          result={this.state.showDialog} //show or hide
          message={this.state.message} //show result
          hide={this.hideDialog} //show
          show={this.showDialog} //hide
          stop={this.stopNumber} //stop derease
          resume={this.resumeNumber} //resume derease
          showHide={this.state.showHide}
        />
      </div>
    );
  }
}
