import React from "react";
// import { useSiteMetadata } from "../Hooks/use-site-metadata";

export const SEO = ({ title }) => {
  const seo = {
    title: title,
  };

  return (
    <>
      <title>{seo.title || "hello title"}</title>
    </>
  );
};
