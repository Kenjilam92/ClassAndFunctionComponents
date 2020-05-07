import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Title from './components/Title'
import Paragraph from './components/Paragraph'



function App() { 
  // this is what will show up on html
  return (
    <div className="container">
      <Title>
        Hello Dojo!
      </Title> 
      <h2> Things I need to do</h2>
      <Paragraph>
        <p>Learn React</p>
        <p>Climb Mt.Everest</p>
        <p>Run a marathon</p>
        <p>Feed the dogs</p>
      </Paragraph>
    </div>
  );
}

export default App;
