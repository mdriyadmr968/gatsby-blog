import { Link } from "gatsby";
import * as React from "react";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SEO } from "../Components/seo";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {loading ? (
          <Skeleton count={50} />
        ) : (
          <div>
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
        )}
      </SkeletonTheme>
    </div>
  );
};

export default IndexPage;

// export const Head = () => <SEO title="my gatsby blog" />;
