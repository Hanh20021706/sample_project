import React from 'react'

const FooterClient = () => {
    return (
        <div>
            <footer className="probootstrap-footer probootstrap-bg">
                <div className="container">
                    <div className="row mb60">
                        <div className="col-md-3">
                            <div className="probootstrap-footer-widget">
                                <h4 className="heading">About Black.</h4>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <p><a href="#">Read more...</a></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="probootstrap-footer-widget probootstrap-link-wrap">
                                <h4 className="heading">Quick Links</h4>
                                <ul className="stack-link">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">Testimonial</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="probootstrap-footer-widget">
                                <h4 className="heading">More Links</h4>
                                <ul className="stack-link">
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Support Help</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="probootstrap-footer-widget probootstrap-link-wrap">
                                <h4 className="heading">Subscribe</h4>
                                <p>Far far away behind the word mountains far from.</p>
                                <form action="#">
                                    <div className="form-field">
                                        <input type="text" className="form-control" placeholder="Enter your email" />
                                        <button className="btn btn-subscribe">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-md-6">
                            <div className="probootstrap-footer-widget">
                                <p>
                                    © 2017
                                    <a href="https://uicookies.com/">uiCookies:Black</a>. Designed
                                    by <a href="https://uicookies.com/">uicookies.com</a> <br />
                                    Demo Photos from <a href="https://unsplash.com/">Unsplash</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="probootstrap-footer-widget right">
                                <ul className="probootstrap-social">
                                    <li>
                                        <a href="#"><i className="icon-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-facebook" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-instagram2" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default FooterClient
