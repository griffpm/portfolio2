import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
    <title> Paul Menard Developpeur web </title>
    <meta
          name="description"
          content="Je vous invite à découvrir un portfolio magnifique. Fait par un introvert pour les introvert.  Je vous invite a constatez, avec vos yeux, mes compétences et mes projets. "
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
