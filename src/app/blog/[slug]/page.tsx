import { formatDate, getBlogBySlug } from '@/lib/get-blog';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/site.config.mjs';
import dynamic from 'next/dynamic';

const CustomMDX = dynamic(() => import('@/components/mdx'), {
});

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export const generateMetadata = async (props: Params) => {
  const params = await props.params;

  const { slug } = params;
  const blog = getBlogBySlug(slug);

  return {
    ...blog?.metadata,
  };
};

const BlogPage = async (props: Params) => {
  const params = await props.params;

  const { slug } = params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <section>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.metadata.title,
            datePublished: blog.metadata.publishedAt,
            dateModified: blog.metadata.publishedAt,
            description: blog.metadata.summary,
            image: blog.metadata.image
              ? `${BASE_URL}${blog.metadata.image}`
              : `/og?title=${encodeURIComponent(blog.metadata.title)}`,
            url: `${BASE_URL}/blog/${blog.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className='title font-bold text-4xl tracking-tighter'>
        {blog.metadata.title}
      </h1>
      <div className='flex justify-between items-center mt-2 mb-8 text-sm'>
        <p className='text-sm font-bold text-neutral-600 dark:text-neutral-400'>
          {formatDate(blog.metadata.publishedAt)}
        </p>
      </div>
      <article className='prose'>
        <CustomMDX source={blog.content} />
      </article>
    </section>
  );
};

export default BlogPage;
