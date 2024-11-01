/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import Link from './link';
import Code from './code';
import { BASE_URL } from '@/site.config.mjs';
import toc from '@jsdevtools/rehype-toc';
import remarkGfm from 'remark-gfm';

export function Table({ data }: any) {
  const headers = data.headers.map((header: any, index: any) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row: any, index: any) => (
    <tr key={index}>
      {row.map((cell: any, cellIndex: any) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link
        href={href}
        {...props}
      >
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    />
  );
}

function RoundedImage(props: any) {
  return (
    <Image
      alt={props.alt}
      className='rounded-lg'
      {...props}
    />
  );
}

function slugify(str: any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: any) {
  const Heading = ({ children }: any) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function Paragraph({ children, ...props }: any) {
  return (
    <p
      {...props}
      className={'py-2'}
    >
      {children}
    </p>
  );
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  p: Paragraph,
  a: CustomLink,
  code: Code,
  table: Table,
};

export default function CustomMDX(this: any, props: any) {
  return (
    <MDXRemote
      source={props.source}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          baseUrl: BASE_URL,
          rehypePlugins: [
            toc.bind(this, {
              nav: false,
            }),
          ],
        },
      }}
    />
  );
}
