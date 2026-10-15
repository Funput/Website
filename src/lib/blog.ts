import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** Published posts, newest first: the order the blog index and the feed share. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** The canonical, trailing-slash URL of a post (the site sets `trailingSlash: 'always'`). */
export function postUrl(post: BlogPost, site: URL | string): string {
  return new URL(`/blog/${post.id}/`, site).href;
}
