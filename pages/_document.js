// file: /pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mainn">
        <div className="main_child">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
