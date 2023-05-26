import Layout from '@/components/layout/Layout'
import Show from '@/components/sections/Show'
import React from 'react'
import { createClient } from "contentful";

export default function projets({posts}) {
    return (
    <Layout>
        <Show posts={posts} />
    </Layout>
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
    // console.log(data)
    /* 3. on envoie la data dans le props de la page */
    return{
        
        props: {
        posts: data.items,
    },
    };
    }