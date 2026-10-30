import type { APIRoute } from 'astro';
import { getPublishedPosts, postUrl } from '../../lib/blog';
import { FUNPUT_CONSTANTS as links } from '../../lib/constants';

/**
 * JSON Feed 1.1 of the blog (https://jsonfeed.org/version/1.1).
 *
 * The Funput apps read it for their news tab, and any feed reader can subscribe to it.
 * It carries metadata only: articles open on the website, so their content and the
 * site's privacy terms stay in one place.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? links.SITE_URL;
  const posts = await getPublishedPosts();
  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Funput Blog',
    home_page_url: new URL('/blog/', origin).href,
    feed_url: new URL('/blog/feed.json', origin).href,
    description: 'Cập nhật và hướng dẫn từ Funput: bộ gõ tiếng Việt mã nguồn mở.',
    language: 'vi',
    items: posts.map((post) => ({
      id: post.id,
      url: postUrl(post, origin),
      title: post.data.title,
      summary: post.data.description,
      date_published: post.data.pubDate.toISOString(),
      ...(post.data.updatedDate && { date_modified: post.data.updatedDate.toISOString() }),
      tags: post.data.tags,
    })),
  };
  return new Response(JSON.stringify(feed), {
    headers: { 'Content-Type': 'application/feed+json; charset=utf-8' },
  });
};
