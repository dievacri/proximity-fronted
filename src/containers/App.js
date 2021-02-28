import React, { useEffect } from 'react';
import './App.scss';
import Posts from "./components/posts/posts";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/post/actions";

const App = () => {
    const dispatch = useDispatch();
    const { list: postList } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="App" data-testid="app">
            <h1>Posts</h1>
            <Posts posts={postList} />
        </div>
    );
}

export default App;
