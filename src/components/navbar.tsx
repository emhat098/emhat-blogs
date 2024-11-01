import Container from './container';
import Link from './link';

const Navbar = () => {
  return (
    <Container
      as={'nav'}
      className={
        'm-2 !py-4 !px-6 rounded-lg shadow flex justify-between items-center'
      }
    >
      <div className='flex gap-4 items-center'>
        <Link
          className={'text-lg font-mono underline underline-offset-8 font-bold'}
          href={'/'}
        >
          Em Ha Tuan
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={'/blogs'}>Blogs</Link>
      </div>
      <div className='flex gap-4 items-center'>
        <Link
          href={'https://github.com/emhat098'}
          target={'blank'}
        >
          Github
        </Link>
        <Link
          href={'https://www.facebook.com/emhat098'}
          target={'blank'}
        >
          Facebook
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
