import React from "react";
import { useSiteMetadata } from "../Hooks/use-site-metadata";

export const SEO = ({ title, children}) => {
  const {
    title: defaultTitle
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      {children}
    </>
  );
};
