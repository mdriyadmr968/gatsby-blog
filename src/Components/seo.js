import React from "react";

export const SEO = ({ title }) => {
  return (
    <>
      <title>{title || "hello title"}</title>
      <meta name="title" content={title} />
      <meta name="Description" content="testing default Description" />
    </>
  );
};
