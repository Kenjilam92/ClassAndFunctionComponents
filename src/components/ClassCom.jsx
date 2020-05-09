import React, { Component } from "react"

class ProfolioC extends Component{
    constructor (props){
      super(props);
      this.state={
        currentAge: this.props.age
      }
    }

    happyBrithday =() => this.setState({
      currentAge: this.state.currentAge+1
    })

    render(){
      return (
        <div className="container bg-success border border-dark" style={{width: '300px'}} >
          <h2>{this.props.fname}, {this.props.lname}</h2>
          <p>Age: {this.state.currentAge}</p>
          <p>Hair Color: {this.props.hair}</p>
      <button class="btn btn-danger" onClick={this.happyBrithday}>Happy Birthday {this.props.fname} {this.props.lname}</button>
        </div>
      );
    }
}

export default ProfolioC;