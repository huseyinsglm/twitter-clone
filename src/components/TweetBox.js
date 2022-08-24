import firebase from "firebase";
import React, {useState} from "react";
import db from "../firebase";
import {
    EmojiIcon,
    GIFIcon,
    ImageIcon,
    PollIcon,
    ScheduleIcon,
} from "../icons/icon";


const TweetBox = () => {
    const [content, setContent] = useState("");

    const sendTweet = () => {
        if (content !== "") {
            db.collection("feed").add({
                displayName: "Hüseyin Sağlam",
                username: "@huseyinnsaglamm",
                content,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                image:
                "https://64.media.tumblr.com/740f278e4d08f54ba5fa8b81c7d4df8d/e63296a369cfebdb-5c/s540x810/50ad42e70c05b2b316924faaa3cc6653c3e0a3dd.gifv",
                avatar:
                    "https://pbs.twimg.com/profile_images/1542437293574815744/MM8ECS-J_400x400.jpg",
            });

            setContent("");
        }
    };

    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
          className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
          placeholder="What's happening?"
          onChange={(e) => setContent(e.target.value)}
          value={content}
      />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                </div>
                <button
                    className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendTweet}
                >
                    Tweet
                </button>
            </div>
        </div>
    );
};

export default TweetBox;