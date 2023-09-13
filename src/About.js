import React from 'react'

const About = () => {
  return (
    <>
      <section>
        <div className='one'>
          <div className='abo'>
            <h1>About</h1>
            <p>Our Chatting App offers a wide range of features designed to enhance your chatting experience.</p>
          </div>
        </div>
      </section>
      <div className='container ' id='ani'>
        <div className='row ab'>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
            <img id='abim' src='https://cdn-icons-png.flaticon.com/128/3712/3712139.png' />
            <h2>Awesome design</h2>
            <p>This design made with help of animation</p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
            <img id='abim' src='https://cdn-icons-png.flaticon.com/128/4456/4456893.png' />
            <h2>Easy Customise</h2>
            <p>This design made with help of animation</p>

          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
            <img id='abim' src='https://cdn-icons-png.flaticon.com/128/4380/4380960.png' />
            <h2>Extreme Security</h2>
            <p>This design made with help of animation</p>

          </div>

        </div>
      </div>



      <div className='bac' style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div class="elementor-widget-container">
          <section class="call-action-area  call-action-area-six">
            <div class="video-bg" style={{ background: "url:http://droitthemes.com/wp/appart/wp-content/uploads/2018/05/get_bg.jpg no-repeat scroll center center/cover" }} > </div>
            <div class="container">
              <div class="row call-action">
                <div class="col-md-5 col-sm-12 col-lg-6" id='quick'>
                  <h2 id='head'>
                  Global Reach
                  </h2>
                  <p>
                  Our Chatting App connects users from around the world, transcending geographical boundaries. Discover new cultures, gain insights into different lifestyles, and forge connections with people from diverse backgrounds. Embrace the beauty of global conversations and celebrate the diversity that enriches our community.


                  </p>
                  <a href='#'>   <button type="button" class="btn btn-primary">Primary</button></a>

                </div>
                <div class="col-sm-7 col-lg-6">
                  <div class="call-mobile-img" >

                    <img id='imgg' src='./new.png' />



                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>


      {/* <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "500px" }} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Connecting People</h5>
              <p>At Our Chatting App, we believe in the power of human connections. </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src=" https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" style={{ height: "500px" }} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Rich Features</h5>
              <p>Engage in vibrant conversations and make every interaction memorable.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1558885544-2defc62e2e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" style={{ height: "500px" }} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Moderation and Safety</h5>
              <p>We prioritize your safety and ensure a respectful and inclusive environment for all users.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}




      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack">
              </i>

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

export default About
