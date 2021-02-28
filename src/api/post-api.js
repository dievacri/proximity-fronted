import { ajax } from "rxjs/ajax";

export class PostApi {
    static URL = 'https://jsonplaceholder.typicode.com';
    static getPosts = () => ajax.get(`${PostApi.URL}/posts`);

    static getComments = (postId) => ajax.get(`${PostApi.URL}/comments?postId=${postId}`);
}
