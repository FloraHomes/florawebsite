import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
    return (
        <>
             <div className="content">
                                            <hr className="bg-primary pt-1" />
                                            <h2 className="mt-3" style={{ color: '#551584' }}>WHO WE ARE AND SERVICES WE OFFER!</h2>
                                            <p style={{ color: 'black' }}>
                                                We are FloraHomes Global Consult Ltd., a Property Verification and Real Estate Investment company that gives professional end
                                                to end Real Estate and Property Development services as seen below. Our team include but not limited to; Land Surveyors,
                                                Estate Surveyors, Town Planners, Property Lawyers, Quantity Surveyors, Civil Engineers, Architects, Researchers . . .
                                            </p>
                                            <Link to="/about" className="theme-btn btn-style-four mt-3 investment_modal_btn mb-4"> <span className="btn-title">To know more about us, continue reading</span> </Link>
                                            <hr className="bg-primary" />

                                            {/* point 10 */}
                                            <div className="our-servies mt-1 pb-4">
                                                <div className="sec-title py-3">
                                                    <h2 style={{ marginBottom: '0px' }}>ARE YOU READY TO GET OUR SERVICE? </h2>
                                                </div>
                                                <ul className="list-style-one">
                                                    <p className="text" style={{ marginLeft: '10px' }}>
                                                        If you would like to talk to us online or book a physical meeting appointment based on any of our product options
                                                        available OR PERHAPS you have a customized service request, fill in the short brief below to allow our team to contact you
                                                        for further discussion.
                                                    </p>
                                                    <br />
                                                    <a style={{ marginLeft: '10px' }} className="btn-hover color-6" href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform?usp=pp_url">Custom
                                                        service request</a>
                                                    <br />
                                                    <blockquote className="newbq" style={{ marginLeft: '10px' }}>
                                                        We will listen to your brief and let you access the best property service care you can get.
                                                        <br />
                                                        Click the link below to book a call/meeting and we will be right with you within a short period.
                                                    </blockquote>
                                                    <br />
                                                    <a style={{ marginLeft: '10px' }} className="btn-hover color-6" href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform?usp=pp_url">Book
                                                        a call/meeting</a>
                                                </ul>
                                            </div>
                                        </div>
        </>
    );
}

export default WhoWeAre;
