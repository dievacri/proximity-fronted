import React from 'react';
import { render } from "../utils/test-utils";
import App from './App';

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
];

describe('App', () => {
   test('Render App component', () => {
       const { getByTestId } = render(<App />, { initialState: { posts: { list: [], error: null}}});
       expect(getByTestId('app')).toBeInTheDocument();
   });

    test('Render App component with posts', () => {
        const { getAllByRole, debug } = render(<App />, { initialState: { posts: { list: posts, error: null}}});
        expect(getAllByRole('post')).toHaveLength(2);
    });
});
