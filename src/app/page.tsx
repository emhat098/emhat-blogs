import BlogPost from '@/components/blog-post';

export const metadata = {
  title: 'Home page',
};

export default function Page() {
  return (
    <>
      <h1>Home Page</h1>
      <BlogPost />
    </>
  );
}
