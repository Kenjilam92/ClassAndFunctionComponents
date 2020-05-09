import React, { Component } from "react"

class ProfolioC extends Component{
    render(){
      return (
        <div className="container bg-success border border-dark" style={{width: '250px'}} >
          <h2>{this.props.fname}, {this.props.lname}</h2>
          <p>Age: {this.props.age}</p>
          <p>Hair Color: {this.props.hair}</p>
        </div>
      );
    }
}

export default ProfolioC;