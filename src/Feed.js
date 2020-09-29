import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts &&
          posts?.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              userName={post.username}
              verified={post.verified}
              text={post.text}
              avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/FelixINX_Avatar.png/240px-FelixINX_Avatar.png"
              image={post.image}
            />
          ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
