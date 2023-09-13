import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='two'>
        <div className='cont'>
          <h2>Contact</h2>
          <p>We're committed to providing excellent user support and ensuring your experience with our Chatting App is enjoyable and hassle-free. </p>
        </div>
      </div>
      <div className='container' style={{ marginTop: "4%" }}>
        <div className='row l'>
          <div className='d col-4'>
          <i class="fa-solid fa-location-dot fa-7x"></i><br/><br/><span id='locc'>
            <h3>Location</h3>
            <p>  Patiala</p></span>
          </div>

          <div className='d col-4'>
          <i class="fa-solid fa-phone fa-7x"></i><br/><br/><span>
            <p><h3>Phone</h3>
              +91 88888 77777</p></span>
          </div>


          <div className='d col-4'>
          <i class="fa-solid fa-envelope fa-8x"></i><br/><br/><span>
            <p><h3>Email</h3>
              harppppp@gmail.com</p></span>
          </div>

        </div>
      </div>
      <div className='container ' style={{ marginTop: "4%" }}>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' id='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4649.9946985344095!2d76.3795137158471!3d30.335363574817!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684317861933!5m2!1sen!2sin" width="450" height="400" ></iframe>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' id='mail'>
            <form>
              <div className='row' style={{ marginTop: "6%" }}>
                <h3 style={{ textAlign: "center" }}>Contact here</h3>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label for="exampleFormControlInput1" class="form-label"> Name:</label>
                  <input type="text" name='user_name' class="form-control" id="exampleFormControlInput1" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label for="exampleFormControlInput1" class="form-label">Email:</label>
                  <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" />
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label for="exampleFormControlInput1" class="form-label">Contact Number:</label>
                  <input type="tel" name="contact_no" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label for="exampleFormControlInput1" class="form-label">Address:</label>
                  <input type="text" name="company_name" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <label for="exampleFormControlInput1" class="form-label">Message:</label>
                  <textarea type="text" name="message" class="form-control" rows='3' col='5' id="exampleFormControlInput1" />
                </div>
              </div>
              <a href='#'>  <button className='contact-button' type='submit' value="send">Submit</button> </a>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <span className="logo_name">   <img src="./logo.png" id='pic1' /></span>
            </div>

          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Get started</a></li>
            </ul>
            {/* <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#">App design</a></li>
              <li><a href="#">Web design</a></li>
              <li><a href="#">Logo design</a></li>
              <li><a href="#">Banner design</a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Account</li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Prefrences</a></li>
              <li><a href="#">Purchase</a></li>
            </ul> */}
            <ul class="box">
              <li class="link_name">Contact Info</li>
              <li><a href="#">2425,Urban Estate,Patiala</a></li>
              <li><a href="#">+91 88888 77777</a></li>
              <li><a href="#">contact@website.com</a></li>
            </ul>
            <ul class="box input-box">
              <li class="link_name">Subscribe</li>
              <li><input type="text" placeholder="Enter your email" /></li>
              <li><input type="button" value="Subscribe" /></li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">Copyright © 2023 <a href="#">Logo.</a>All rights reserved</span>
            <span class="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Contact
