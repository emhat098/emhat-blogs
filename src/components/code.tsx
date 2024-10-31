'use client';

import { highlight } from '@/lib/shiki';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

const Code: FC<PropsWithChildren> = ({ children, ...props }) => {
  console.log(children);
  const [data, setData] = useState('');

  useEffect(() => {
    if (children) {
      highlight(children as string).then((data) => {
        setData(data);
      });
    }
  }, [children]);

  return (
    <code
      dangerouslySetInnerHTML={{ __html: data }}
      {...props}
    />
  );
};

export default Code;
