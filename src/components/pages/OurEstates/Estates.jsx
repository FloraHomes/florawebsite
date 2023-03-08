import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { propertyCategories } from "../../../data/property";
import { filterByPropertyCategory } from "../../../redux/slices/propertiesSlice";
import estate_header from "../../assets/flora_header.jpg";
import EstateCard from "./EstateCard";

const Estates = () => {
  const properties = useSelector((state) => state?.properties?.properties)

    const dispatch = useDispatch()
    console.log(properties);
  return (
    <>
      <section
        className="page-title"
        style={{
          backgroundImage: `url(${estate_header})`,
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <h1>Our Estates</h1>
          <ul className="bread-crumb clearfix">
            {/* <li><a href="index.php">Home</a></li>
          <li>About Us</li> */}
          </ul>
        </div>
      </section>

      <section className="news-section alternate">
        <div className="auto-container">
          <div className="row">
            <div className="mb-4" style={{justifyContent: "center", display:"flex"}}>
            <select
              name="client_category"
              className="mdb-select md-form"
              onChange={(e) => dispatch(filterByPropertyCategory(e.target.value))}
            >
              {propertyCategories?.map((category) => (
                <option key={category?._id} value={category?._id}>
                {category?.name}
              </option>
              ))}
            </select>
            </div>
          </div>
          <div className="row">
            
            {properties?.map((property) => (
              <div
                key={property?._id}
                className="news-block col-lg-6 col-md-6 col-sm-12 wow fadeInRight animated"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <EstateCard property={property}/>
            
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Estates;
