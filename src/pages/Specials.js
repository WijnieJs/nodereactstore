import React from "react";

const Specials = () => {
  function handleMouseMove(ev) {
    console.log(ev);
  }

  return (
    <div className="background">
      <div className="special3d">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="special1d" onMouseMove={(ev) => handleMouseMove(ev)}>
        {/* <div className="line-4"></div>
        <div className="line-5"></div>
        <div className="line-6"></div> */}
      </div>
    </div>
  );
};

export default Specials;
