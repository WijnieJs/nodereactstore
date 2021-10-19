import React from "react";

const avatar = (props) => {
  return (
    <div
      className="image"
      style={{
        backgroundImage: `url('${props.imageUrl}')`,
        backgroundSize: props.contain ? "contain" : "cover",
        backgroundPosition: props.left ? "left" : "center",
      }}
    />
  );
};

export default avatar;
