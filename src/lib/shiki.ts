import { createHighlighter, makeSingletonHighlighter } from 'shiki';
import { bundledLanguages } from 'shiki/bundle/web';

const getHighlighter = makeSingletonHighlighter(createHighlighter);

export async function highlight(code: string) {
  const highlighter = await getHighlighter({
    langs: [...Object.keys(bundledLanguages)],
    themes: ['nord'],
  });

  const html = highlighter.codeToHtml(code, {
    theme: 'nord',
    lang: 'typescript',
  });

  return html;
}
