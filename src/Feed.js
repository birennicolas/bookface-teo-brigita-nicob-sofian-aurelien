import React from 'react'
import "./Feed.css";
import Stories from "./Stories"
import MessageSender from './MessageSender';
import Post from './Post';
function Feed() {
    return (
        <div>
            <Stories />
            <MessageSender />
            <Post />
        </div>
    )
}

export default Feed
