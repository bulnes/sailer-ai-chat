import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`antialiased min-h-screen bg-background`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
