import React from 'react';
import logo from '../assets/img/logo.png';
import homeright from '../assets/img/banner/home-right.png';


function Footer() {
  return (
    <footer className="footer_area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="footer_top flex-column">
                        <div className="footer_logo">
                            <a href="#">
                                <img src={logo} alt="" />
                            </a>
                            <h4>Follow Me</h4>
                        </div>
                        <div className="footer_social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row footer_bottom justify-content-center">
                <p className="col-lg-8 col-sm-12 footer-text">

                    Copyright &copy;
                    <script type="da61b6c68b0d6cd0aa24483d-text/javascript">
                        document.write(new Date().getFullYear());
                    </script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank">Onixter</a>
                </p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
