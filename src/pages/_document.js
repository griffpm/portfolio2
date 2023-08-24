import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
    <title> Mon Portfolio </title>
    <meta
          name="description"
          content="Je vous invite à découvrir un portfolio magnifique. Fait par un introvert pour les introvert. "
          key="desc"
        />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
