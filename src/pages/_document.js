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
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Tulpen+One&display=swap" rel="stylesheet">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
