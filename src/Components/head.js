import React from "react";
import { SEO } from "./seo";

function Head(props) {
  console.log(props);
  return <SEO title={props.title}></SEO>;
}

export default Head;
