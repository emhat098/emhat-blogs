import BackToHome from '@/components/back-to-home';
import { PropsWithChildren } from 'react';

const BlogLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
      <BackToHome />
    </div>
  );
};

export default BlogLayout;
