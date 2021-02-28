import React, { useState } from 'react';
import Comments from "../comments/comments";

const Post = ({ post }) => {
    const [showComments, setShowComments] = useState(false);

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
