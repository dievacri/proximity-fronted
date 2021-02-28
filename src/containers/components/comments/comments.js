import React, { useEffect, useState } from 'react';
import './comments.scss';
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../../store/comment/actions";
import { addComment } from "../../../store/comment/actions";

const Comments = ({ postId }) => {
    const dispatch = useDispatch();
    const { list: comments } = useSelector(state => state.comments);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const onAddComment = () => {
        dispatch(addComment({name, email, body}));
        setName('');
        setEmail('');
        setBody('');
    };

    useEffect(() => {
        dispatch(getComments(postId));
    }, [dispatch, postId]);
  return(
      <div className="comments__container" data-testid="comments">
          <h3>Comments:</h3>
          {comments && comments.map((comment, index) => (
            <div key={`comment-${index}`} className="comments__item">
                <span className="comments__item__name">{comment.name}</span>
                <span className="comments__item__email">{comment.email}</span>
                <p className="comments__item__description">{comment.body}</p>
            </div>
          ))}
          <h3>Add your comment:</h3>
          <div className="comments__add">
              <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} data-testid="nameInput"/>
              </div>
              <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} data-testid="emailInput"/>
              </div>
              <div>
                  <label htmlFor="comment">Comment:</label>
                  <textarea name="comment" id="comment" value={body} onChange={e => setBody(e.target.value)} data-testid="bodyInput"/>
              </div>
              <button type="button" onClick={onAddComment} data-testid="buttonComment">Add</button>
          </div>
      </div>
  );
};

export default Comments;
