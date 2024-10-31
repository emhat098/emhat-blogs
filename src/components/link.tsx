'use client';

import { cn } from '@/lib/utils';
import NextLink, { LinkProps } from 'next/link';
import { FC, AnchorHTMLAttributes, PropsWithChildren } from 'react';

const Link: FC<
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren
> = ({ children, ...props }) => {
  return (
    <NextLink
      {...props}
      className={cn(
        'transition-all duration-200 ease-linear hover:text-neutral-700 hover:animate-pulse hover:underline',
        props.className,
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
