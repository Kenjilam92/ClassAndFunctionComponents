import React, { Component } from "react";

class Paragraph extends Component{
    render() {
      return (
      <>
        <p>{this.props.children}</p>
        {this.props.children}
      </>
      );
    }
  }

export default Paragraph;