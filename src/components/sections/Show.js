import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from 'next/link';
import Card from '../cards/Card';


export default function Show({posts}) {
    // console.log(posts);
    return (
    <div id='show'>
        <div id='show_content'>
            <div className='flex flex-wrap justify-between '>
                <div id='show_content_text'>
                    <h2>Ici vous pouvez découvrir mes projets</h2>
                </div>
            </div>
            <div>
                <div >
                    {/* liste des projets */}
                    <div id='posts'>
                        {
                        posts.map(post=>(
                        <Link target='_blank' href={`post/${post.fields.slug}`}key={post.sys.id}>
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
    )
}