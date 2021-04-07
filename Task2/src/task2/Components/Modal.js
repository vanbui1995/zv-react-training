import React from "react";

export default class Modal extends React.Component {
  render() {
    const showHide = this.props.result ? "box show" : "box hide";
    const showHideM = this.props.resultM ? "box-main show" : "box-main hide";
    return (
      <div>
        <div className={showHide} onClick={this.props.click}></div>
        <div className={showHideM}>{this.props.children}</div>
      </div>
    );
  }
}
