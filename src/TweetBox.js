import React, { useState } from "react";
import { Button, Avatar } from "@material-ui/core";
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    console.log(tweetMessage, tweetImage);
    db.collection("posts").add({
      displayName: "Arun",
      username: "rockerarun300",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/FelixINX_Avatar.png/240px-FelixINX_Avatar.png",
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/FelixINX_Avatar.png/240px-FelixINX_Avatar.png" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__inputImage"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter image URL"
        />
        <Button className="tweetBox__tweetButton" onClick={(e) => sendTweet(e)}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
