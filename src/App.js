import React, { Component } from 'react';
import Char from './Char';
import Validation from './Validation';

class App extends Component {
  state = {
    myText : 'ATA'
  }
  tab =[...this.state.myText];
  onCHangeHandler = (event) =>{
    let myCopiedText = {...this.state.myText};
    myCopiedText = event.target.value;
    this.setState({myText:myCopiedText});

  }
  render() {
  
     
   
    const display= this.tab.map((x) => { return <Char element={x}/> })
   

    return (
    <div>
       <input onChange={(event)=> this.onCHangeHandler(event)}  type = 'text' placeholder='enter your name'/>
    <Validation myLenght={this.state.myText.length}></Validation>
    {display}
    <Char></Char>
   </div>
   
    );
  }
}

export default App;