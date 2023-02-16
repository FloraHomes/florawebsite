import React from 'react';

const CommentForm = () => {
    return (
        <>
        
          <form method="post" id="leave_comment_form">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="name" className="form-control" required />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" pattern="[0-9]+" maxLength={11} minLength={11} name="phone" className="form-control" placeholder="Phone" aria-describedby="helpId" required />
            </div>
            <div className="form-group">
              <label htmlFor="con">Comment</label>
              <textarea className="form-control" name="con" id="con" cols={15} rows={5} required defaultValue={""} />
            </div>
            <button className="theme-btn btn-style-two" type="submit" name="add-com">Add Comment Now</button>
          </form>
   
        </>
    );
}

export default CommentForm;
