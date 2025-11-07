import { NotFoundError } from "./model/AppError";
import type { Post, Posts } from "./model/Wordpress";

const WP_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/wp.joelj.ca';

export async function getPostsFromWordpress(page: number = 1, perPage: number = 5): Promise<Posts> {
  return await fetch(`${WP_API_URL}/posts?page=${page}&number=${perPage}`)
    .then(res => res.json().then(json => ({
      posts: json.posts.map((post: Post) => ({
        ...post,
        title: post.title.replace('&#8217;', "'")
      })),
      totalPages: Math.ceil(json.found / perPage)
    })));
}

export async function getPostFromWordpress(slug: string): Promise<Post | NotFoundError> {
  return await fetch(`${WP_API_URL}/posts/slug:${slug}`)
    .then(res => res.json())
    .then(json => {
      if (json.error == 'unknown_post') {
        return new NotFoundError(json.message);
      }
      return {
        ...json,
        title: json.title.replace('&#8217;', "'")
      };
    });
}