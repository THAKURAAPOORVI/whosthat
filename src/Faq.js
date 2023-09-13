import React from 'react'

const Faq = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height={"500px"} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Discover New Connections</h3>
              <p>Expand your social circle and meet fascinating individuals from around the world. </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" height={"500px"} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Community Guidelines</h5>
              <p>We foster a friendly and inclusive community atmosphere. </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height={"500px"} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>User Profiles</h5>
              <p>Add a profile picture, write a bio, and include your interests. </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='container'>
        <h2 style={{ marginTop: "10%", textAlign: "center" }}> Data Analytics</h2>
        <p style={{ textAlign: "center" }}>Cumque adipisci anim quisque provident posuere blandit accumsan delectus</p>

        <div className="row mt-2">
          <div className="col-md-6 d_flex">
                    
          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Message send available?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong> the "message send" feature typically allows users to send various types of content to their contacts or groups. </strong> It's important to note that specific chat apps may have additional features or limitations when it comes to sending content. It's best to refer to the documentation or support resources of the particular chat app you are using for detailed information about its messaging capabilities.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Is there 24/7 customer support?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>When it comes to 24/7 customer support, it typically refers to a service provided by a company or organization that is available around the clock, 24 hours a day, 7 days a week. </strong> 
        It's important to note that the specific content and level of support provided may vary from company to company. Some organizations may have comprehensive 24/7 customer support with all the mentioned features, while others may have more limited offerings.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       This is a simple question?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the simple question accordion body.</strong> 
        This question is open-ended and encourages the other person to share their upcoming weekend activities or any plans they might have. It's a casual and friendly conversation starter that can help initiate a chat and engage the other person in a discussion about their interests and weekend plans.
            </div>
    </div>
  </div>
</div>

            
          </div>
          <div className="col-md-6">
            <div className="faq_image_mockup wow fadeInUp" data-wow-delay="200ms">
              <img className='img-fluid' id='imme' src="./login.png" alt="featured" />
            </div>
          </div>
        </div>

      </div>

      <div className='bac'>
        <div className="elementor-widget-container">
          <section className="call-action-area  call-action-area-six">
            <div className="video-bg" style={{ background: "url:http://droitthemes.com/wp/appart/wp-content/uploads/2018/05/get_bg.jpg no-repeat scroll center center/cover" }} > </div>
            <div className="container">
              <div className="row call-action">
                <div className="col-md-7 col-sm-12" style={{ marginTop: "25%" }}>
                  <div className="call-text">
                    <div className="title-four title-w">
                      <h2 style={{ color: "white" }}> Get The App Now! </h2> </div>
                    <div className="apps_button white">
                      <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual</p>
                      <a href="#" style={{ backgroundColor: "rgba(255,255,255,0)" }}> App Store </a>
                      &nbsp;  &nbsp; <a href="#" style={{ backgroundColor: "rgba(255,255,255,0)" }} >Google Play </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 ">
                  <div className="call-mobile-img">
                    <img className="img-fluid" id='imet' src="explore.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
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
            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#">App design</a></li>
              <li><a href="#">Web design</a></li>
              <li><a href="#">Logo design</a></li>
              <li><a href="#">Banner design</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Prefrences</a></li>
              <li><a href="#">Purchase</a></li>
            </ul>
            <ul className="box">
            <li class="link_name">Contact Info</li>
        <li><a href="#">2425,Urban Estate,Patiala</a></li>
        <li><a href="#">+91 88888 77777</a></li>
        <li><a href="#">contact@website.com</a></li>
      </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li><input type="text" placeholder="Enter your email" /></li>
              <li><input type="button" value="Subscribe" /></li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2023 <a href="#">Logo.</a>All rights reserved</span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Faq