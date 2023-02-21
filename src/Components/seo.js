import React from "react";
import { useSiteMetadata } from "../Hooks/use-site-metadata";

export const SEO = ({ title }) => {

  const seo = {
    title: title || 'hello',
  };

  return (
    <>
      <title>{seo.title}</title>
      <link
        rel="shortcut icon"
        href="/corbin-cc-logo2.png"
        type="image/x-icon"
      />
    </>
  );
};
