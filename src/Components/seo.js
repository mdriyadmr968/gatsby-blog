import React from "react";
// import { useSiteMetadata } from "../Hooks/use-site-metadata";

export const SEO = ({ title }) => {
  //   const {
  //     title: defaultTitle,
  //     description: defaultDescription,
  //     image,
  //     siteUrl,
  //   } = useSiteMetadata();

  const seo = {
    title: title,
  };

  return (
    <>
      <title>{seo.title}</title>
    </>
  );
};
