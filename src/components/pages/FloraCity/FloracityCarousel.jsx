import React from 'react';
 
const FloracityCarousel = ({src, id}) => {
    return (
        <>
             <div className="popup-container" id={`popup-ext${id}`}>
                        <div className="popup-content">
                            <a href="#gallery-carousel" className="gallery-carousel owl-loaded owl-drag">×<div className="owl-stage-outer">
                                <div className="owl-stage" />
                                </div>
                                <div className="owl-nav disabled">
                                    <div className="owl-prev"><span className="arrow_carrot-left" />
                                    </div>
                                    <div className="owl-next"><span className="arrow_carrot-right" />
                                    </div>
                                    </div>
                                    <div className="owl-dots disabled" /></a>
                            <figure className="popup-image">
                                <img src={src} alt="florahomes_images" />
                            </figure>
                        </div>
                    </div>  
        </>
    );
}

export default FloracityCarousel;
