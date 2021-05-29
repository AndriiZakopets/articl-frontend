import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DateTime } from 'luxon';
import userMock from '__mocks__/userMock';

const components = {
  code({ inline, className, children }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter style={prism} language={match[1]}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} />
    );
  },
};

function Article() {
  // const mock = articleFactory();
  return (
    <article style={{ overflowWrap: 'anywhere' }} className="mt-5">
      <h1>title</h1>
      <img src={userMock().avatarUrl} alt="avatar" />
      <p
        style={{
          fontSize: '0.83255rem',
          lineHeight: '1.75rem',
          display: 'block',
          marginBbottom: '1.75rem',
          marginTop: '-1rem',
        }}
      >
        {DateTime.fromMillis(new Date().getTime()).toLocaleString(
          DateTime.DATE_FULL,
        )}
      </p>
      <ReactMarkdown components={components}>Article content</ReactMarkdown>
    </article>
  );
}

export default Article;
