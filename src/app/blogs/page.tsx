import BlogPost from '@/components/blog-post';

export const generateMetadata = () => {
  return {
    title: 'My blogs',
  };
};

const BlogPage = () => {
  return (
    <section>
      <h1 className='title font-light text-4xl tracking-tighter'>{'Blogs'}</h1>
      <hr className={'my-2'} />
      <BlogPost />
    </section>
  );
};

export default BlogPage;
