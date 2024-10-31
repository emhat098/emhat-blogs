import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={'max-w-5xl mx-auto m-2 p-4 rounded-lg shadow'}>
      <div>
        <Link href={'/'}>Em Ha Tuan</Link>
      </div>
    </nav>
  );
};

export default Navbar;
