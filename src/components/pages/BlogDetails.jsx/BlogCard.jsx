import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({link, image, title, category, date}) => {
    return (
        <>
           <div className='card'>
            <Link to ={link}>
              <div className='secImg'>
                <img
                  id='sec5Img'
                  className='card-img-top'
                  src={image}
                  alt='Card cap'
                />
              </div>
              <div className='card-body'>
                
                <h5 className='card-title'>
                  <p>
                    <i
                      className='fas fa-user-alt'
                      style={{ marginRight: '10px' }}
                    ></i>
                    FLORAHOMES ADMIN
                    <span className='calender' style={{ float: 'right' }}>
                      <i className='fas fa-calendar-check'></i>{' '}
                      <span className='text-muted'>{date}</span>
                    </span>
                  </p>
                  <span>
                    <i
                      className='fas fa-tags'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small className='text-muted'>{category}</small>
                  </span>
                </h5>
                <p className='card-text font-weight-bold'>
               {title}
                </p>
                
              </div>
              <div className='card-footer'>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <button type='button' className='custom-btn btn btn-lg'>
                  Read More...
                </button>
              </div>
              </Link>
            </div>   
        </>
    );
}

export default BlogCard;
