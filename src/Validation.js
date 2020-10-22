import React, { Component } from 'react';

class Validation extends Component {
    
    render() { 
        let display =  ' ' ; 
     let myLenghtATOZAHRI= this.props.myLenght;
   if (myLenghtATOZAHRI > 5)  {
          display =  'long text'
   } 
   else if (myLenghtATOZAHRI === 0) { display =  ' '}
   else   display =  'short text'
        return (
            <div>

                <h3>{this.props.myLenght}</h3>
                <h3>{display}</h3> 

            </div>
        );
    }
}

export default Validation;