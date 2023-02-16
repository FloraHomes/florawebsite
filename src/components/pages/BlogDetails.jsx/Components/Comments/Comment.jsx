import React from 'react';
import unlike from "../../../../assets/unlike.png"
import unlove from "../../../../assets/unlove.png"
const Comment = ({user, message}) => {
    return (
        <>
              <div className="col-md-8">
        <div className="comment-box" id="comment_shower">
          <div className="comment" id="people_comment_2">
            <div className="comment-body">
              <div className="comment-info">
                <div className="name">{user}</div>
                <small className="date">
                  <i className="fas fa-calendar-check" />
                  August 22, 2021, 10:35 am
                </small>
              </div>
              <div className="text">{message}</div>
              <button className="theme-btn show-sub-input" data-id={2} style={{marginTop: '6px', padding: '0px 6px', background: '#541484', color: '#fff'}} type="submit" name="reply_now">Reply</button>
              <span className="like_comment" style={{cursor: 'pointer'}} data-comment-id={2}><img className="like_img" id="like_img_" src={unlike} style={{height: '20px', width: '20px'}} alt="" />
                <span className="total_likes" style={{color: '#3381ff', textDecoration: 'underline'}} id="comment_like_2">0</span>
              </span>
              <span className="love_comment" style={{cursor: 'pointer'}} data-comment-id={2}><img className="love_img" id="comment_love_img_2" src={unlove} style={{height: '20px', width: '20px'}} alt="" />
                <span className="total_loves" id="comment_love_2" style={{cursor: 'pointer', color: '#f65166', textDecoration: 'underline'}}>0</span>
              </span>
            </div>
          </div><div className="comment reply-to-comment2" style={{marginLeft: '10%', display: 'none'}}>
            <div className="comment-body" style={{width: '100%'}}>
              <div className="reply-section">
                <form method="post" id="comment_reply_form">
                  <input type="hidden" name="comment_id" defaultValue={2} />
                  <input type="hidden" name="post_or_page" defaultValue="page" />
                  <div className="row">
                    <div className="col-md-6"><input type="text" placeholder="Name" className="form-control" name="sub_name" /></div>
                    <div className="col-md-6"><input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="Email" className="form-control" name="sub_email" /></div>
                    <div className="col-md-12"><input type="text" pattern="[0-9]+" maxLength={11} minLength={11} placeholder="Phone" className="form-control" name="sub_phone" /></div>
                  </div>
                  <div className>
                    <input type="text" className="form-control" name="sub_comment" />
                    <button className="theme-btn" style={{marginTop: '6px', width: '100%', background: '#ed6c11', color: '#fff'}} type="submit" name="reply_now">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div></div>
      </div> 
        </>
    );
}

export default Comment;
