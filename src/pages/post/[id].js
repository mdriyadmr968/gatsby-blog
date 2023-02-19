import React from "react";

const singlepost = (props) => {
  console.log(props.params.id);
  return (
    <div>
      <h1>this is single post of id {props.params.id}</h1>
    </div>
  );
};

export default singlepost;
