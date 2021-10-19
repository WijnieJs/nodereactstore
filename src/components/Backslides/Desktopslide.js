import React, { Component } from "react";
import Image from "../Image/Image";
import m2 from "../../static/images/m2.jpg";
import ww1 from "../../static/images/ww1.jpg";

import mm from "../../static/images/mm.jpg";
import s from "../../static/images/s.jpg";

class Desktopslide extends Component {
  render() {
    let tpz = null;
    switch (this.props.caseIndex) {
      case 0:
        tpz = (
          <div className="wrappingbck one">
            <div className="desktopslideimage  fadein">
              <Image
                imageUrl={ww1}
                backgroundColor1={"#868e96"}
                backgroundColor2={"#861    e96"}
                center
              />
            </div>
            <div className="desktopslidewrapper " />
          </div>
        );
        break;
      case 1:
        tpz = (
          <div className="wrappingbck two">
            <div className="desktopslideimage  fadeout">
              <Image imageUrl={mm} />
            </div>
          </div>
        );
        break;
      case 2:
        tpz = (
          <div className="wrappingbck three">
            <div className="desktopslideimage  fadein">
              <Image imageUrl={s} />
            </div>
          </div>
        );
        break;
      case 3:
        tpz = (
          <div className="wrappingbck four">
            <div className="desktopslideimage  fadeout">
              <Image imageUrl={m2} />
            </div>
          </div>
        );
        break;

      default:
        tpz = (
          <div className="desktopslideimage">
            <Image imageUrl={m2} />
          </div>
        );
    }
    return tpz;
  }
}

export default Desktopslide;
