import { Link } from "gatsby";
import React, { useState, useEffect } from "react";

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
    <div>
      <h1>this is home</h1>
      {posts.map((post) => (
        <div key={post.postId}>
          <p>{post.postId}</p>
          <h1>{post.title}</h1>
          <h3>{post.description}</h3>
          {/* <Link to={`/description/${post.postId}`}>Read more</Link> */}
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
