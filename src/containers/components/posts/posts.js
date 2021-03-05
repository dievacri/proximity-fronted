import React from 'react';
import './posts.scss';
import Post from "../post/post";

/**
 * Posts component - list the post from the API
 * @param {Array<Post>} posts - Posts
 */
const Posts = ({posts}) => {
    return (
        <div className="posts-container" data-testid="posts">
            {posts && posts.map((post, index) => (
                <Post key={`post-item${index}`} post={post} />
            ))}
        </div>
    );
};

export default Posts;
