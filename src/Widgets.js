import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1256540914484477953"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rockerarun300"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/@rockerarun300"}
          options={{ text: "#reactjs is awesome", via: "@rockerarun300" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
