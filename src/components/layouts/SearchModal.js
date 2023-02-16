/* eslint-disable eqeqeq */
import React, { useRef } from 'react'
import '../../css/Modal.css'

const SearchModal = () => {
  const modal = useRef('modal');

  // Show modal
  // Has to be done in the nav component

  // Hide modal
  const onClickClose = (e) => e.target.classList.contains('close-btn') || e.target.classList.contains('fa-times') ? modal.current.classList.remove('show-modal') : false

  // Hide modal on outside click
  window.addEventListener('click', e =>
    // the id_modal is the entire width,so if you click a space outside the modal container it closes
    e.target == modal.current ? modal.current.classList.remove('show-modal') : false
  );


  return (
    <div ref={modal} className="modal-container" id="modal">
      <button className="close-btn" id="close" onClick={onClickClose}>
        <i className="fa fa-times"></i>
      </button>
      {/* <div className="modal-header">
          <h3>Search</h3>
        </div> */}
      <div className="modal-content">

        <div className="searchCon">
          <input type="search" placeholder='Search Here...' name="searchMenu" id="searchBar" />
          <input type="submit" name="searchMenu" id="searchBar" value='SEARCH NOW!' />
        </div>

        <h3 className='text-center'>Recent Search KeyWords</h3>
        <div className="recentKeys">
          <span>Property Scam</span>
          <span>Real Estate Story</span>
          <span>Real Estate Tour</span>
          <span>Omonile</span>
        </div>

        {/* <p>Register with us to get offers, support and more</p>
          <form className="modal-form">
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Search...."
                className="form-input"
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="form-input"
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="form-input"
              />
            </div>
            <div>
              <label for="password2">Confirm Password</label>
              <input
                type="password"
                id="password2"
                placeholder="Confirm Password"
                className="form-input"
              />
            </div>
            <input type="submit" value="Submit" className="submit-btn" />
          </form> */}
      </div>
    </div>
  )
}

export default SearchModal
