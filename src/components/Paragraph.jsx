import React, { Component } from "react";

class Paragraph extends Component{
    render() {
      return (
        <p>
          {this.props.text}
          {this.props.children}
        </p>
      );
    }
  }

export default Paragraph;