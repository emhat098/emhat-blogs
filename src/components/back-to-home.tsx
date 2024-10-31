import { PropsWithChildren } from 'react';
import Link from './link';
import { HomeIcon } from '@heroicons/react/24/outline';

const BackToHome: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex justify-start items-center gap-2'>
      <HomeIcon className={'w-4 h-4'} />
      <Link href={'/'}>{children || 'Back to home'}</Link>
    </div>
  );
};

export default BackToHome;
