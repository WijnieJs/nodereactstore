import React from 'react';
import Swipermouse from "../Swipermouse/Swipermouse";


const Slidesbuild = (props) => {
  return (
    <div>
      <Swipermouse setIndexback={props.setIndexback}/>
    </div>
  );
}

export default Slidesbuild;
