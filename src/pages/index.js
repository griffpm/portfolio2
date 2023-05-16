import Hero from '@/components/sections/Hero'
import Show from '@/components/sections/Show'
import Skills from '@/components/sections/Skills'
import React from 'react'
import { createClient } from "contentful";
import Contact from '@/components/sections/Contact';

export default function Home({posts}) {
  // console.log(posts);
  return (
    <div>
      <Hero/>
      <Skills/>
      <Show posts={posts} />
      <Contact />
    </div>
  )
}

export async function getStaticProps(){
  /* 1. connect to contentful*/
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  }
  );

  /* 2. Recuperer ma data en cas de success pour le content_type => portfolio */
  // je limite a 9 posts
  const data = await client.getEntries({
      content_type:"portfolio",
      order:"sys.createdAt",
      limit: 9,
  });
  console.log(data)
  /* 3. on envoie la data dans le props de la page */
  return{
      
      props: {
      posts: data.items,
  },
  };
  }
