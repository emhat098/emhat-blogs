/* eslint-disable @typescript-eslint/no-explicit-any */
'server only';

import { getBlogLinks } from '@/lib/get-blog';
import Link from 'next/link';

const BlogPost = () => {
  const blogPosts = getBlogLinks() as [];
  return (
    <ul>
      {blogPosts &&
        blogPosts.length > 0 &&
        blogPosts.map((blog: any) => (
          <li key={blog.metadata.title}>
            <Link href={`/blog/${blog.slug}`}>{blog.metadata.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default BlogPost;
