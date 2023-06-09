import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from "react-icons/hi"
import blog from "../images/blog-1.jpg"
import Container from '../components/Container'

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className="col-12">
                       <div className='single-blog-card'>
                            <Link className='d-flex align-items-center gap-10' to="/blogs"><HiOutlineArrowLeft className='fs-4'/>Go back to Blogs</Link>
                            <h3 className='title'>
                                A Beautiful Sunday Morning Renaissance
                            </h3>
                            <img className='img-fluid w-100 my-4' src={blog} alt='blog' />
                            <p>Overall, this tutorial provides a comprehensive and practical guide to building an e-commerce website using React JS. Whether you are a beginner or an experienced developer, this tutorial is an excellent resource for anyone looking to build a modern and functional e-commerce website.</p>
                       </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default SingleBlog