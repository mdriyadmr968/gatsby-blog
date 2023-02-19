import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import style from "./index.module.css";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

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
      "https://ms-testnet.api.onnftverse.com/v1/marketplace/0/blog/post/list?type=TUTORIAL",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.content);
      });
  }, []);

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Welcome to Gatsby Blog</h1>
      {posts.map((post) => (
        <div key={post.postId}>
          <h1>{post.title}</h1>
          <div
            style={{ marginBottom: "5%" }}
            dangerouslySetInnerHTML={{
              __html: post?.description.slice(0, 200),
            }}
          />
          <Link
            to={`/post/${post.postId}`}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              textDecoration: "none",
              padding: "2%",
              borderRadius: "5%",
              display: "block",
              width: "150px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
