import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/FHGC.png';


import '../../css/Footer.css'

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget about-widget">
                                        <div className="logo">
                                            <Link to="/"><img src={logo} alt="FloraHomes logo" width="150" /></Link>
                                        </div>
                                        <div className="text">
                                            <p>The foremost online property verification and Real Estate investment company that helps clients to acquire verified properties and invest in verified deals.</p>
                                        </div>
                                        <ul className="social-icon-one social-icon-colored">
                                            <li><a href = "https://www.facebook.com/florahomesgc" target="_blank" rel='noreferrer'><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href = "https://www.twitter.com/florahomesgc" target="_blank" rel='noreferrer'><i className="fab fa-twitter"></i></a></li>
                                            <li><a href = "https://www.instagram.com/florahomesgc" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a></li>
                                            <li><a href = "https://www.youtube.com/c/florahomesgc" target="_blank" rel='noreferrer'><i className="fab fa-youtube"></i></a></li>
                                            <li><a href = "https://www.linkedin.com/in/florahomesgc" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget useful-links">
                                        <h2 className="widget-title">Useful Links</h2>
                                        <ul className="user-links">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/blog">Blogs</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="/university">University</Link></li>
                                            <li><Link to="/links">Quick Links</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget contact-widget">
                                        <h2 className="widget-title">Get in Touch</h2>
                                        <div className="widget-content">
                                            <ul className="contact-list">
                                                <li>
                                                    <i className="icon far fa-clock"></i>
                                                    <div className="text">Mon - Sat: 08:00am - 6:00pm</div>
                                                </li>

                                                <li>
                                                    <i className="icon fas fa-phone-volume"></i>
                                                    <div className="text"><a href="tel:+2348094442019">+234-809-444-2019</a></div>
                                                </li>

                                                <li>
                                                    <i className="icon fas fa-paper-plane"></i>
                                                    <div className="text"><a href="mailto:hello.florahomesgc@gmail.com">hello.florahomesgc@gmail.com</a></div>
                                                </li>

                                                <li>
                                                    <i className="icon fas fa-globe-africa"></i>
                                                    <div className="text">Suite 6, U-Mudi Filling Station, Lekki-Epe Express, Ibeju-Lekki, Lagos.</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget useful-links">
                                        <h2 className="widget-title">T&C's</h2>
                                        <ul className="user-links">
                                            <li><Link to="/">Privacy Policy</Link></li>
                                            <li><Link to="/">Terms and Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="copyright-text">
                            <p>© Copyright 2021 <Link to='/'>FloraHomes GC</Link> | All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer