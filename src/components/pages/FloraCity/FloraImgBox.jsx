/* eslint-disable jsx-a11y/alt-text */
import React from 'react';



import OwlCarousel from "react-owl-carousel"

import fern_i1 from "../../assets/fern_i1.jpg"
import fern_i9 from "../../assets/fern_i9.jpg"
import fern_i10 from "../../assets/fern_i10.jpg"
import fern_i3 from "../../assets/fern_i3.jpg"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const FloraImgBox = () => {
  return (


    <OwlCarousel className="owl-theme" loop margin={6} nav>

      <div className="item">
        <img style={{ width: "260px", height: "150px" }} src={fern_i1} />
      </div>
      <div className="item">
        <img style={{ width: "260px", height: "150px" }} src={fern_i3} />
      </div>
      <div className="item">
        <img style={{ width: "260px", height: "150px" }} src={fern_i9} />
      </div>
      <div className="item">
        <img style={{ width: "260px", height: "150px" }} src={fern_i10} />
      </div>
      <div className="item">
        <img style={{ width: "260px", height: "150px" }} src={fern_i1} />
      </div>


    </OwlCarousel>


  );
}

export default FloraImgBox;
