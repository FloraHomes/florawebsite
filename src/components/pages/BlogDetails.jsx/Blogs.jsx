import React from 'react';
import { Link } from 'react-router-dom';
import header from "../../assets/productAssets/about-bg.jpg"
import BlogCard from './BlogCard';
import cardImg3 from '../../assets/blog3.jpg'
import cardImg1 from '../../assets/blog1.jpg'
import cardImg12 from '../../assets/blog2.jpg'
import Footer from '../../layouts/Footer';
const Blogs = () => {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: `url(${header})` }}>
                <div className="auto-container">
                    <h1>Blog </h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </section>
            {/*End Page Title*/}

            
            <section className="news-section">
        <div className="anim-icons">
          <span className="icon icon-circle-blue wow fadeIn" />
          <span className="icon twist-line-1 wow zoomIn" />
          <span className="icon twist-line-2 wow zoomIn" />
          <span className="icon twist-line-3 wow zoomIn" />
        </div>

        <div className="auto-container">
        <div className="sec-title pb-5 text-center">
          <span className="title">Blogs</span>
          <h2>Eye-Opening Contents</h2>
        </div>
        <div className="sec5">
        <div className="container-fluid">
          <div className="card-deck blog-posts">
          <BlogCard title='Lagos Set To Go Digital in Land Related Services Come 2021' category='Property Documentation' date='2020-12-14' link='/blog-1' image={cardImg1}/>
            <BlogCard title='Know Your Land Size' category='Real Estate Investment' date='2020-10-07' link='/blog-2' image={cardImg12}/>
          <BlogCard title='Know Your Property Title' category='  Property Authentication & Verification' date='2020-05-07' link='/blog-3' image={cardImg3}/>
          </div></div></div></div>

      </section>
            <Footer/>
        </>
    );
}

export default Blogs;
