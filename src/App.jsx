import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ProfolioC from './Components/ClassCom'
import ProfolioF from './Components/FunctionalCom'



function App() { 
  // this is what will show up on html
  return (
  <>

    <h2>This is Class Components Assignment</h2>
    <div className="d-flex justify-content-around flex-wrap" >
      <ProfolioC fname="Doe" lname="Jane" age={45} hair="black"/>
      <ProfolioC fname="Smith" lname="John" age={88} hair="Brown"/>
      <ProfolioC fname="Fillmore" lname="Millard" age={50} hair="Brown"/>
      <ProfolioC fname="Doe" lname="Jane" age={45} hair="Brown"/>
    </div>
    <h2> This is Functional Components </h2>
    <div className="d-flex justify-content-around flex-wrap">
      <ProfolioF fname="Doe" lname="Jane" age={45} hair="black"/>
      <ProfolioF fname="Smith" lname="John" age={88} hair="Brown"/>
      <ProfolioF fname="Fillmore" lname="Millard" age={50} hair="Brown"/>
      <ProfolioF fname="Doe" lname="Jane" age={45} hair="Brown"/> 
    </div>
  </>
  );
}

export default App;
