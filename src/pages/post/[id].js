import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Singlepost = (props) => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-app-token": "E9FE46D9-FC93-480F-9DC6-D26F7DE243A0",
      },
    };

    fetch(
      `https://ms-testnet.api.onnftverse.com/v1/marketplace/blog/post/${props.params.id}/detail`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [props.params.id]);

  return (
    <div style={{ width: "60%", margin: "auto", paddingTop: "2%" }}>
      <Helmet>
        <meta content="article" property="og:type" />
        <meta
          property="og:title"
          content="Fact Check: Did Sourav Ganguly actually resign as the BCCI President? Rumours abound;"
        />
        <meta
          property="og:url"
          content="https://facthunt.in/posts/2135/Fact-Check:-Did-Sourav-Ganguly-actually-resign-as-the-BCCI-President?-Rumours-abound;"
        />
        <meta
          property="og:description"
          content="Sourav Ganguly&amp;#39;s Tweet about him &amp;quot;planning to start something&amp;quot; triggered rumours that Ganguly is going to quit as the President of BCCI. In a clarifying statement, Jay Shah put an end to such rumours.
"
        />
        <meta
          property="og:image"
          content="https://www.india.com/wp-content/uploads/2021/12/Sourav-Ganguly-PTI.jpg"
        />
        <meta
          name="description"
          content="Sourav Ganguly&amp;#39;s Tweet about him &amp;quot;planning to start something&amp;quot; triggered rumours that Ganguly is going to quit as the President of BCCI. In a clarifying statement, Jay Shah put an end to such rumours."
        />
        <meta name="keywords" />
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />

        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@facthunt_in" name="twitter:site" />
        <meta content="@facthunt_in" name="twitter:creator" />
        <meta
          name="twitter:title"
          content="Fact Check: Did Sourav Ganguly actually resign as the BCCI President? Rumours abound;"
        />
        <meta
          name="twitter:description"
          content="Sourav Ganguly&amp;#39;s Tweet about him &amp;quot;planning to start something&amp;quot; triggered rumours that Ganguly is going to quit as the President of BCCI. In a clarifying statement, Jay Shah put an end to such rumours.
"
        />
        <meta
          name="twitter:image"
          content="https://www.india.com/wp-content/uploads/2021/12/Sourav-Ganguly-PTI.jpg"
        />

        <meta content="1667939569986269" property="fb:pages" />
      </Helmet>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton count={50} />
        ) : (
          <div>
            <Link
              to="/"
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                textDecoration: "none",
                padding: "2%",
                borderRadius: "5%",
                marginTop: "5% !important",
              }}
            >
              Home
            </Link>
            <h1>Title: {post?.title}</h1>
            <h3>Category: {post?.category}</h3>
            <h1>Description</h1>

            <div dangerouslySetInnerHTML={{ __html: post?.description }} />
          </div>
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Singlepost;
