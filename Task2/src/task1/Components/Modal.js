import React from "react";
export default class Modal extends React.Component {
  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <div className="modal-main">
          {this.props.children}
          <button onClick={this.props.handleClose}>Close</button>
        </div>
      </div>
    );
  }
}
