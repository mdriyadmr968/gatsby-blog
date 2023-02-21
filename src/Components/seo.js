import React from "react";
import { useSiteMetadata } from "../Hooks/use-site-metadata";

export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <link
        rel="shortcut icon"
        href="/corbin-cc-logo2.png"
        type="image/x-icon"
      />
      {children}
    </>
  );
};
