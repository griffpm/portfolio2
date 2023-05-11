import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from 'next/link';
import Card from '../cards/Card';


export default function Show({posts}) {
    console.log(posts);

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
        <div className='flex justify-between mx-2 my-2'>
            <div id="show_content_text">
                <h2>Take a look at my projects <br/> and see my <span>awesomness</span> </h2>
                <button id="myBtn">Open Modal</button>{/* bouton pour ouvrir la modale */}
            </div>
            <div>
                <img src="/img/folder.png" alt="" />
            </div>
        </div>
        <div id="myModal" className="modal">{/* modale */}
            <div className="modal-content">{/* Modal content */}
                <span className="close"><AiOutlineCloseCircle/></span>
                <div id='modale_content_content'>
                    <h2>My projects</h2>
                    <div id='posts'>
                        {
                        posts.map(post=>(
                        <Link href={`post/${post.fields.slug}`}key={post.sys.id}>
                            <Card
                                img={post.fields.featuredImage.fields.file.url}
                                slug={post.fields.slug}
                            />
                        </Link>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}