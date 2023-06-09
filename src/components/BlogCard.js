import React from 'react'
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt="blog"></img>
            </div>
            <div className='blog-content'>
                <p className='date'>1 Dec, 2022</p>
                <h5 className='title'>
                    A Beautiful Sunday Morning Renaissance
                </h5>
                <p className='desc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium maiores in voluptas, velit facere autem amet deserunt sed! Error, fugit. Suscipit inventore quibusdam id nihil eius illum voluptatem, nam aut.
                </p>
                <Link to='/blogs/:id' className='button'>Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard