import React from 'react';
import logo from '../assets/img/logo.png';
import '../App.css';
import '../assets/css/bootstrap.css';
import '../assets/vendors/linericon/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/vendors/owl-carousel/owl.carousel.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/vendors/nice-select/css/nice-select.css';
import '../assets/css/style.css';
import Banner from './Banner';
import Aboutdiv from './Aboutdiv';
import Brandarea from './Brandarea';
import Featurearea from './Featurearea';
import Portfolioarea from './Portfolioarea';
import Testimonialarea from './Testimonialarea';
import Newsletterarea from './Newsletterarea';
import Footer from './Footer';

function Index() {
  return (
    <div className="App">
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

              <a className="navbar-brand logo_h"><img src={logo} alt="" height="40px" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item active"><a className="nav-link" href="index-2.html">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                  {/* <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                      <li className="nav-item"><a className="nav-link" href="portfolio-details.html">Portfolio Details</a></li>
                    </ul>
                  </li> */}
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                    {/* <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                    </ul> */}
                  </li>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Banner />
      <Aboutdiv />
      <Brandarea />
      <Featurearea />
      <Portfolioarea />
      <Testimonialarea />
      <Newsletterarea />
      <Footer />
    </div>
  );
}

export default Index;
