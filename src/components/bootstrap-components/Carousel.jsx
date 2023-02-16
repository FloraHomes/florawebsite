import React from 'react';
import ReviewCard from './ReviewCard';

const Carousel = ({ data }) => {
  return (
    <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel'>
      <div className='carousel-inner'>
        {data.map((item, index) => {
          return (
            <div key={index} className={`carousel-item ${index === 0 && 'active'}`}>
              <div
                style={{ margin: 'auto' }}
                className='d-flex align-items-center justify-content-center'
              >
                <ReviewCard data={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
