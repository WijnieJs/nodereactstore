import React, { Component } from "react";
 

class Mainbtns extends Component {
  
  render() {
    
   
    let tpx = null;
    switch (this.props.type) {
      case 0:
        tpx = (
        <button onClick={() => console.log('herheh')} className={`op-btn  fadein}`}>SHOP</button>
        );
        break;
      case 1:
        tpx = (
      <button onClick={() => console.log('herheh')} className={`op-btn   fadeout }`}>NEWS</button>
        );
        break;
      case 2:
        tpx = (
       <button onClick={() => console.log('herheh')} className={`op-btn  fadein  }`}>SPECIALS</button>
        );
        break;
      case 3:
        tpx = (
       <button onClick={() => console.log('herheh')} className={`op-btn  fadeout }`}>ABOUT</button>
        );
        break;

      default:
        tpx = <button className="op-btn"></button>;
    }
    return tpx;
  }
}

export default Mainbtns;
