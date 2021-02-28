import React from "react";
import { render } from '@testing-library/react';
import Posts from "./posts";

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

describe('Posts', () => {
   test('render posts component', () => {
      const { getByTestId } = render(<Posts posts={[]} />);
      expect(getByTestId('posts')).toBeInTheDocument();
   });

   test('render posts components with posts', () => {
      const { getAllByRole } = render(<Posts posts={posts} />);
      expect(getAllByRole('post')).toHaveLength(2);
   });
});
