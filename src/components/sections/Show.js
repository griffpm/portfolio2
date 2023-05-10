import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from 'next/link';
import Card from '../cards/Card';
import { createClient } from "contentful";

export default function Show(posts) {


    if (typeof window !== 'undefined') {
        //here `window` is available, so `window.document` (or simply `document`) is available too
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    } 

    return (
    <div id='show'>
    <div id='show_content'>
        <h2>Take a look at my projects <br/> and see my <span>awesomness</span> </h2>
        <button id="myBtn">Open Modal</button>{/* bouton pour ouvrir la modale */}
        
        <div id="myModal" class="modal">{/* modale */}
            <div class="modal-content">{/* Modal content */}
                <span class="close"><AiOutlineCloseCircle/></span>
                {/* {
                    posts.map(post=>(
                    <Link href={`post/${post.fields.slug}`}key={post.sys.id}>
                    <Card
                        img={post.fields.featuredImage.fields.file.url}
                        slug={post.fields.slug}
                    />
                    </Link>
                    ))
                } */}
            </div>
        </div>
    </div>
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

    /* 3. on envoie la data dans le props de la page */
    return{
        props: {
        posts: data.items,
    },
    };
    }
