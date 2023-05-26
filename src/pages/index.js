import Hero from '@/components/sections/Hero'
import React from 'react'
import Layout from '@/components/layout/Layout';
import Moi from '@/components/sections/moi';


export default function Home({posts}) {
  // console.log(posts);
  return (
    <div>
      <Layout>
        <Hero/>
        <Moi/>
      </Layout>
    </div>
  )
}
