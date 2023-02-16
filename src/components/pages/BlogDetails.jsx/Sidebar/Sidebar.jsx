import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* // SIDEBAR  */}
      <div className="col-lg-4 colmd-4 col-sm-12">
        <div className="card sidebar-widget categories my-5">
          <div className="card-header"> Categories</div>
          <div className="card-body">
            <ol>
              <li className="my-3">
                {" "}
                <Link to="#"> Real Estate Stories </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link to="#"> Real Estate Investment </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link to="#">
                  {" "}
                  Property Verification &amp; Authentication{" "}
                </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link to="#"> Property Documentation </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link to="#"> Design Build and Manage </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link to="#"> Real Estate Opportunities </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link to="#"> Real Estate Product </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link to="#"> Estate </Link>{" "}
              </li>
            </ol>
          </div>
        </div>
        <div className="card sidebar-widget popular-posts">
          <div className="card-header">Latest Posts</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <Link href="#"></Link>
            </li>
            <li className="list-group-item">
              {" "}
              <Link href="#"></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
