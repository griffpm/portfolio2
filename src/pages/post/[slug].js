import { createClient } from 'contentful';
import React from 'react'
import { AiFillHome } from 'react-icons/ai';

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
}

export default function Index({post}) {
    console.log("post", post);
    const {title, tech, featuredImage, description, developper, createdAt, client} = post.fields;
    console.log(description);
    return (
        <div id='slug'>
          <div id='go_home'>
            <a href="/"><AiFillHome size={40} className='m-4'/></a>
          </div>
          
          <div id='slug_content'>
            <img src={featuredImage.fields.file.url} alt={title} className='border-grey-500 border-solid border-2' />
            <h2 >{title}</h2>
            <div className='flex flex-wrap space-x-8 my-6 text-[1.5rem]'>
              <p>Developpeur: <span className='text-green-400 text-bold ml-4'>{developper}</span></p>
              <p>Date de mise en ligne: <span className='text-green-400 text-bold ml-4'>{createdAt}</span></p>
              <p>Nom du client: <span className='text-green-400 text-bold ml-4'>{client}</span></p>
            </div>
            <div className=' flex my-4 text-[1.5rem]'>
                <p>Technology / Tools: </p>
                {
                tech.map(tech=>(
                  <p className='text-green-400 text-bold ml-4'>{tech}</p>  
                ))}
            </div>
            <div>
            <p className='text-[1.5rem]'>Description du projet:</p>
            <p className='text-[1.5rem] text-green-400'>{description}</p>
            </div>
          </div>
            
        </div>
        )
    }
