import React, { Component } from "react";
 
class Mainbacks extends Component {
  render() {
    
   
    let tpx = null;
    switch (this.props.type) {
      case 0:
        tpx = (
          <div className={`tpx-one  fadein  `}>
            <h1 className="tpx-one-title">TRENDING!</h1>
            <h5 className="tpx-one-desc">All the modern watch trends, following the latest digital innovations in smarwatches. Lets go digital !</h5>
   
          </div>
        );
        break;
      case 1:
        tpx = (
          <div className={`tpx-two fadeout`}>
            <h1 className="tpx-two-title">SPECIALS</h1>
            <h5 className="tpx-two-desc">
              collections from all over the world
            </h5>
          
          </div>
        );
        break;
      case 2:
        tpx = (
          <div className={`tpx-three fadein`}>
            <h1 className="tpx-three-title">WHY WITH US?</h1>
            <h5 className="tpx-three-desc">
              This is not business, this is passion
            </h5>
           
          </div>
        );
        break;
      case 3:
        tpx = (
          <div className={`tpx-four fadeout`}>
            <h1 className="tpx-four-title">DIGITAL WORLD</h1>
            <h5 className="tpx-four-desc">
              Resourcing all informative information regarding smart watches
            </h5>
     
          </div>
        );
        break;

      default:
        tpx = <div className="tpx-one"></div>;
    }
    return tpx;
  }
}

export default Mainbacks;
