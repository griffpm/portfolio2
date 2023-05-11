import { createClient } from 'contentful';
import React from 'react'


// 1. connection a contentful
const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


// 2. generer ou recuperer tous les slug de mes articles
export async function getStaticPaths(){
  // je recupere mes posts dans contentful
    const res = await client.getEntries({
    content_type:"portfolio",
    });

    const slugs = res.items.map((slug) => {
    return {
        params: {slug: slug.fields.slug},
    };
    });

  // renvoie tous les slugs dans paths
    return{
    paths: slugs,
    fallback: false // tous les slugs qui ne sont pas mon paths => page 404
    };
}

// 3. recuperer data du post en fonction du slug
export async function getStaticProps({params}){
  // recuperer la data lié au slug
    const res = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": params.slug,
    });

  // Je stock la data du post dans une variables
    const post = res.items;

    return{
    props:{
        post: post[0],
    },
    }; 
}console.log(post);

export default function Index({post}) {
    console.log("post", post);
    const {title, tech, featuredImage} = post.fields;
    return (
        <div>
            <h2 >{title}</h2>
            <img src={featuredImage.fields.file.url} alt={title} />
            <div>
                <p>{tech}</p>
            </div>
        </div>
        )
    }
