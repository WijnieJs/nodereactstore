import React, { Component } from 'react';
import Mainbacks from "./Mainbacks"


class Mainback extends Component {
  render() {
    return (
      <div  >
  
        <Mainbacks  type={this.props.caseIndex}  /> 
      </div>
    );
  } 
}

export default Mainback;
