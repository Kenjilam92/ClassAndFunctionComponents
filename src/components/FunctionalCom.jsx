import React from 'react';

const ProfolioF = props => {
  return (
  <div className="container bg-info border border-dark" style={{width: '250px'}} >
    <h2>{props.fname}, {props.lname}</h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hair}</p>
  </div>
  );
}
export default ProfolioF