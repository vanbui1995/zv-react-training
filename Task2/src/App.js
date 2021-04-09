import "./styles.css";
import React from "react";
import Task1 from "./task1/task1";
import Task2 from "./task2/task2";
import Task3 from "./task3/task3";

export default class index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Task 1</h3>
        <Task1 />
        <hr />
        <h3>Task 2</h3>
        <Task2 />
        <hr />
        <h3>Task 3</h3>
        <Task3 />
      </React.Fragment>
    );
  }
}
