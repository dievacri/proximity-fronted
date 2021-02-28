import React from 'react';
import {render, fireEvent} from "../../../utils/test-utils";
import Comments from "./comments";

const post = {
    id: 1,
    title: "Proximity test",
    body: "This is a test",
};

const comments = [{
    id: 1,
    postId: 1,
    name: "Comment test",
    email: "test@test.com",
    body: "This is comment a test",
}];

describe("Comments", () => {
    test("render comments component", () => {
        const { getByTestId, getByText } = render(<Comments postId={0}/>, {
            initialState: {
                posts: {list: [post], error: null},
                comments: {list: comments, error: null}
            }
        });

        expect(getByTestId("comments")).toBeInTheDocument();
        expect(getByText(comments[0].name)).toBeInTheDocument();
    });

    test("add comment", () => {
        const { getByTestId, getByText } = render(<Comments postId={0}/>, {
            initialState: {
                posts: {list: [post], error: null},
                comments: {list: comments, error: null}
            }
        });

        const commentTest = {
            id: 2,
            postId: 1,
            name: "Diego Vasquez",
            email: "dievacri@gmail.com",
            body: "This is comment a test",
        };

        fireEvent.change(getByTestId("nameInput"), {
            target: {
                value: commentTest.name
            }
        });

        fireEvent.change(getByTestId("emailInput"), {
            target: {
                value: commentTest.email
            }
        });

        fireEvent.change(getByTestId("bodyInput"), {
            target: {
                value: commentTest.body
            }
        });

        fireEvent.click(getByTestId("buttonComment"));

        expect(getByText(commentTest.email)).toBeInTheDocument();
    });
});
