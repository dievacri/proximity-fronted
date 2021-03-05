import React, { useState } from 'react';
import Comments from "../comments/comments";
/**
 * A Post
 * @typedef {Object} Post
 * @property {string} title - The title
 * @property {string} body - The description
 * @property {number} id - The identification
 */

/**
 * Post Component - Show the detail of the post
 * @param{Post} post - The post
 */
const Post = ({ post }) => {
    const [showComments, setShowComments] = useState(false);

    /**
     * Show comments of the post
     */
    const onShowComments = () => {
      setShowComments(true);
    };

    return(
        <div className="post" role="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button type="button" onClick={onShowComments} data-testid="button">See comments</button>
            {showComments && (
                <Comments postId={post.id} />
            )}
        </div>
    );
};

export default Post;
