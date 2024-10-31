'use client';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { FC, PropsWithChildren } from 'react';
import Navbar from './navbar';
import Container from './container';
import NextTopLoader from 'nextjs-toploader';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextTopLoader
          showSpinner={false}
          color={'black'}
        />
        <Navbar />
        <Container as={'main'}>{children}</Container>
      </body>
    </html>
  );
};

export default MainLayout;
