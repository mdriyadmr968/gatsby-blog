import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

const Singlepost = (props) => {
  const [post, setPost] = useState();
  useEffect(() => {
    // fetch posts data from API
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
      });
  }, [props.params.id]);

  return (
    <div style={{ width: "60%", margin: "auto", paddingTop: "2%" }}>
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
  );
};

export default Singlepost;
