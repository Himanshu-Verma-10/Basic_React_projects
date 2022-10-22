import React from 'react'

function Footer() {
  return (
    <div>
        <div className="main box">
            <div className="grid grid-four-column">
                <div className="head">
                    <h2>Links</h2>
                    <ul>
                        <li>
                            Projects
                        </li>
                        <li>Certificates</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>
                </div>

                <div className="head">
                    <h2>Services</h2>
                    <ul>
                        
                        <li>Web Design</li>
                        <li>Development</li>
                        <li>Hoisting</li>
                    </ul>
                </div>

                <div className="head">
                    <h2>Help us!</h2>
                    <ul>
                        <li>
                            Documentation
                        </li>
                        <li>Support</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="head footer-right">
				<p className="footer-company-about">
					<span>About the company</span>
					We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
				<div className="footer-icons">
					<i className="fa fa-facebook"></i>
				<i className="fa fa-twitter"></i>
					<i className="fa fa-instagram"></i>
					<i className="fa fa-linkedin"></i>
				<i className="fa fa-youtube"></i>
				</div>
                <div className="search">
                <form className="form-footer fm">
                  <input type="text"  placeholder="search here...." name="search" />
                  <input type="button" value="Go" />
               </form>
                </div>
			</div>
            </div>
            

        </div>
            <div className="copyright">
            Company Name © 2018
            </div>
    </div>
  )
}

export default Footer