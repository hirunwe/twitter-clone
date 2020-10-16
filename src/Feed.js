import React from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox"
import Post from "./Post"
import Widgets from "./Widgets"

function feed() {
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

            <Widgets />
        </div>

    )
}

export default feed
