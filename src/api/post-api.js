import { ajax } from "rxjs/ajax";

export class PostApi {
    /**
    * The endpoint's url
     * @static
    */
    static URL = 'https://jsonplaceholder.typicode.com';

    /**
     * Get posts
     */
    static getPosts = () => ajax.get(`${PostApi.URL}/posts`);

    /**
    * Get comments of a post
     * @param {string} postId - The post identification
    * */
    static getComments = (postId) => ajax.get(`${PostApi.URL}/comments?postId=${postId}`);
}
