import React from "react";
import { SEO } from "../../Components/seo";

const Test = () => {
  return (
    <div>
      <h1>this is test</h1>
    </div>
  );
};

export default Test;

export const Head = () => <SEO title="test title from testpage" />;
