import React from 'react';
import {render, fireEvent} from "../../../utils/test-utils";
import Post from "./post";

const post = {
    id: 1,
    title: "Proximity test",
    body: "This is a test",
};

describe('Post', () => {
    test('render post', () => {
        const {getByText} = render(<Post post={post}/>)
        expect(getByText(post.title)).toBeInTheDocument();
    });

    test('show comments', () => {
        const {getByText, getByTestId} = render(<Post post={post}/>, {initialState: {posts: {list: [post], error: null}, comments: []}});
        fireEvent.click(getByTestId("button"));
        expect(getByText("Comments:")).toBeInTheDocument();
    });
});
