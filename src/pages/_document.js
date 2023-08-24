import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
    <title> Mon Portfolio | Paul Menard Developpeur web </title>
    <meta
          name="description"
          content="Je vous invite à découvrir un portfolio magnifique. Fait par un introvert pour les introvert. Vous pourrez, si vous visitez ce site, l'opportunité de voir un simple design, accompagner d'un leger élément de beauté. Je vous invite a constatez, avec vos yeux, mes compétences et mes projets. Je vous souhaite une bonne visite. "
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
