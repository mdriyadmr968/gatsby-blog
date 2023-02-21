import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SEO } from "../../Components/seo";

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
    <>
      {/* <Head title="This is a custom title"/> */}
      <div style={{ width: "60%", margin: "auto", paddingTop: "2%" }}>
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
    </>
  );
};

export default Singlepost;
export const Head = () => <SEO title="my gatsby blog" />;


