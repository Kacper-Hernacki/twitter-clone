import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widget() {
  return (
    <div className="widget">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        {/*  <TwitterTweetEmbed tweetId={"xxx"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="xxx"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/xxx"}
          options={{ text: "xx", via: "xx" }}
        />*/}
      </div>
    </div>
  );
}

export default Widget;
