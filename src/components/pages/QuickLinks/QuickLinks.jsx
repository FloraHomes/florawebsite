import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_min.jpg";
const QuickLinks = () => {
  return (
    <>
      <div className="py-4 page-container" style={{ background: "#0C7A30" }}>
        <div className="auto-container">
          <div className="row justify-content-center">
            {/*Content Side / Blog Sidebar*/}
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12">
              <div className>
                <div className="inner-box">
                  <div className="text-center">
                    <img
                      className="no-fluid rounded-circle"
                      width="100px"
                      src={logo}
                      alt=""
                    />
                    <h3 className="text-light font-weight-bold">
                      @FloraHomesGC
                    </h3>
                    <p className="text-light mb-4">
                      Preventing Real Estate Losses by running end-to-end
                      verification on every subject property before you pay for
                      them, one property at a time.
                    </p>
                  </div>
                  {/* /.text-center END */}
                  <div className="list-group quick-links">
                    <Link
                      to="/real-estate-mistakes"
                      className="list-group-item px-3 py-2 list-group-item-action flex-column align-items-center"
                    >
                      <span className="d-flex w-100 justify-content-center">
                        <h5 className="mb-0 font-weight-medium">
                          23 Mistakes by Property Investor
                        </h5>
                      </span>
                    </Link>
                    {/* <Link
                      to="/blog-1"
                      className="list-group-item px-3 py-2 list-group-item-action flex-column align-items-center"
                    >
                      <span className="d-flex w-100 justify-content-center">
                        <h5 className="mb-0 font-weight-medium">Latest blog</h5>
                      </span>
                    </Link> */}
                    <Link
                      to="/verification"
                      className="list-group-item px-3 py-2 list-group-item-action flex-column align-items-center"
                    >
                      <span className="d-flex w-100 justify-content-center">
                        <h5 className="mb-0 font-weight-medium">
                          VERIFICATION SERVICE
                        </h5>
                      </span>
                    </Link>
                    <Link
                      to="sales-page"
                      className="list-group-item px-3 py-2 list-group-item-action flex-column align-items-center"
                    >
                      <span className="d-flex w-100 justify-content-center">
                        <h5 className="mb-0 font-weight-medium">
                          BOOK: REAL ESTATE INVESTING WITHOUT TEARS
                        </h5>
                      </span>
                    </Link>
                    <Link
                      to="/floracity"
                      className="list-group-item px-3 py-2 list-group-item-action flex-column align-items-center"
                    >
                      <span className="d-flex w-100 justify-content-center">
                        <h5 className="mb-0 font-weight-medium">OUR ESTATES</h5>
                      </span>
                    </Link>
                    <Link
                      to="/product"
                      className="list-group-item px-3 py-2 list-group-item-action flex-column align-items-center"
                    >
                      <span className="d-flex w-100 justify-content-center">
                        <h5 className="mb-0 font-weight-medium">
                          OUR PRODUCTS
                        </h5>
                      </span>
                    </Link>
                    <a
                      href="https://youtu.be/DoVqj1-Pl94"
                      className="list-group-item px-3 py-2 list-group-item-action flex-column align-items-center"
                    >
                      <span className="d-flex w-100 justify-content-center">
                        <h5 className="mb-0 font-weight-medium">
                          Latest Video
                        </h5>
                      </span>
                    </a>
                    <Link
                      to="/"
                      className="list-group-item px-3 py-2 list-group-item-action flex-column align-items-center"
                    >
                      <span className="d-flex w-100 justify-content-center">
                        <h5 className="mb-0 font-weight-medium">Our Website</h5>
                      </span>
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <a
                      className="mr-33 text-light p-4"
                      href="https://Facebook.com/florahomesgc"
                    >
                      <i className="fab fa-lg fa-facebook" aria-hidden="true" />
                    </a>
                    <a
                      className="mr-33 text-light p-4"
                      href="https://instagram.com/florahomesgc"
                    >
                      <i
                        className="fab fa-lg fa-instagram"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      className="mr-3 text-light p-4"
                      href="https://twitter.com/florahomesgc"
                    >
                      <i className="fab fa-lg fa-twitter" aria-hidden="true" />
                    </a>
                    <a
                      className="mr-33 text-light p-4"
                      href="https://www.youtube.com/channel/UCWnEctNYFxyXrzthXvsxizg"
                    >
                      <i className="fab fa-lg fa-youtube" aria-hidden="true" />
                    </a>
                    <a
                      className="mr-33 text-light p-4"
                      href="https://www.linkedin.com/company/florahomesgc"
                    >
                      <i className="fab fa-lg fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
