import React from 'react';
import './posts.scss';

const Posts = ({ posts }) => {
  return (
      <div className="posts-container" data-testid="posts">
          {posts && posts.map((post, index) => (
              <div key={`post-item${index}`} className="post" role="post">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
              </div>
          ))}
      </div>
  );
};

export default Posts;
