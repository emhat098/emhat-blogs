import type { Highlighter } from 'shiki';
import { createHighlighter } from 'shiki';

let highlighter: Highlighter;

export async function highlight(code: string) {
  if (!highlighter) {
    highlighter = await createHighlighter({
      langs: ['javascript', 'typescript'],
      themes: ['tokyo-night'],
    });
  }
  const html = highlighter.codeToHtml(code, {
    lang: 'javascript',
    theme: 'tokyo-night',
  });

  // highlighter.dispose();

  return html;
}
