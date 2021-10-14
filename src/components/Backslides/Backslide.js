import React, {Component  } from 'react';
import Image from "../Image/Image"  
import m2 from "../../static/images/m2.jpg";
import ww1 from "../../static/images/ww1.jpg";

import mm from "../../static/images/mm.jpg";
import s from "../../static/images/s.jpg";

 

class Backslide extends Component {
  render() {
      
   
    let tpz = null;
    switch (this.props.caseIndex) {
      case 0:
        tpz = (
           <div className="backslideimage fadein">
      <Image imageUrl={ww1}/>
    </div>
        );
        break;
      case 1:
        tpz = (
          <div className="backslideimage fadeout">
      <Image imageUrl={mm}/>
    </div>
        );
        break;
      case 2:
        tpz = (
          <div className="backslideimage fadein">
      <Image imageUrl={s}/>
    </div>
        );
        break;
      case 3:
        tpz = (
          <div className="backslideimage fadeout">
      <Image imageUrl={m2}/>
    </div>
        );
        break;

      default:
        tpz =     ( <div className="backslideimage">
      <Image imageUrl={m2}/>
    </div>)
    }
    return tpz;
  }
}

export default Backslide;
 