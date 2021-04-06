import React from "react";

export default class Modal extends React.Component {
  render() {
    const showHide = this.props.result ? "box show" : "box hide";
    return (
      <div className={showHide}>
        <div className="box-main">{this.props.children}</div>
      </div>
    );
  }
}
