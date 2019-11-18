import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <Author name={tweet.author}/><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={ tweet.retweets }/>
                    <LikeButton count={ tweet.likes }/>
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img
            src={ url }
            className="avatar"
            alt="avatar"
         />
    );
}

function Message({ text }) {
    return (
        <div className="message">
            { text }
        </div>
    );
}

function Author({ name }) {
    return (
        <span className="author">
            <span className="name">{ name.name }</span> <span className="handle">@{name.handle}</span>
        </span>
    );
}

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        )
    } else {
        return null;
    }
}

const testTweet = {
    message: "Something about cats maybe.",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "Iama Catperson"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2019-11-17 22:28:12"
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            { timeString }
        </span>
    )

};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
            {getRetweetCount(count)}
    </span>
);

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
            {count > 0 &&
                <span className="like-count">
                    {count}
            </span>}
        </span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));