import React from 'react';

const ReviewCard = ({ data }) => {
  return (
    <div className='card mb-3' style={{ maxWidth: '540px', border: 'none' }}>
      <div className='row no-gutters'>
        <div className='col-md-4 d-flex flex-col align-items-center'>
          <img src={data.image} alt='img' style={{ borderRadius: '50%' }} />
        </div>
        <div className='col-md-8'>
          <div className='card-body' style={{ height: '16rem' }}>
            <h5 className='card-title'>{data.user_name}</h5>
            <p
              className='card-text mt-1'
              style={{ fontWeight: 'normal', fontSize: '16px', width: '38rem' }}
            >
              {data.review}
            </p>
            <p className='card-text' style={{ marginTop: '1rem', width: '38rem' }}>
              <small className='text-muted'>
                <span
                  style={{ color: '#ffc700', fontSize: '1.5rem' }}
                  className='fa fa-star checked'
                ></span>
                <span
                  style={{ color: '#ffc700', fontSize: '1.5rem' }}
                  className='fa fa-star checked'
                ></span>
                <span
                  style={{ color: '#ffc700', fontSize: '1.5rem' }}
                  className='fa fa-star checked'
                ></span>
                <span
                  style={{ color: '#ffc700', fontSize: '1.5rem' }}
                  className='fa fa-star'
                ></span>
                <span
                  style={{ color: '#ffc700', fontSize: '1.5rem' }}
                  className='fa fa-star'
                ></span>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
