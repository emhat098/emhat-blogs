'server only';

import { getBlogPosts } from '@/lib/get-blog';
import Link from 'next/link';

const BlogPost = () => {
  const blogPosts = getBlogPosts();
  return (
    <ul>
      {blogPosts.map((blog) => (
        <li key={blog.metadata.title}>
          <Link href={`/blog/${blog.slug}`}>{blog.metadata.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogPost;
