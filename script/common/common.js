
const headerHTML = `<div class="custom-navbar my-3">
<div class="container">
  <div class="row px-3 position-relative">
    <div class="col col-lg-3 col-sm-6">
      <a href="#" class="logo">
        <img src="src/images/Logo.png" alt="logo" class="img-fluid">
      </a>
    </div>
    <div class="d-none d-lg-block d-xl-block text-center">
      <ul class="custom-nav col-6 col-lg-9 mt-2">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Vehicle Models</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="d-block d-lg-none col col-sm-6 d-flex flex-row-reverse">
      <button class="hamburger-btn navbar-toggler" type="button" data-bs-toggle="offcanvas"
        aria-label="Toggle navigation">
        <i class="fas fa-bars fa-xl"></i>
      </button>
    </div>
  </div>
  <div class="mobile-navbar position-absolute offcanvas-collapse open" id="navbarsExampleDefault">
    <ul class="mobile-nav navbar-nav me-auto mb-2 mb-lg-0">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Vehicle Models</a></li>
      <li><a href="#">Testimonials</a></li>
      <li><a href="#">Our Team</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</div>
</div>

`
const footerHTML = `<div class="container-fluid download-app py-3 " style="height:15rem;">
<div class="row download gap-3 px-3 ">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center flex-column  " ><h5 class="text-sm-center text-md-center text-start ">Download our mobile app✨</h5>
<p class="text-center text-lg-start">Get exclusive access to car rentals with our app. <br class="d-none d-xl-block d-lg-block d-md-block">
  Download now and experience convenience on the go.
</p></div>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 download-btn-all d-flex align-items-center justify-content-center" >
  <img  class="download-btn" src="src/images/Buttons.png" alt="">

</div>
</div></div>
<div class="main-footer widgets-dark typo-light">
<div class="container">
  <div class="row flex-wrap">

    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="widget subscribe no-box">
        <div class="widget-title"><a href="#" class="logo">
            <img src="src/images/Logo.png" alt="logo" class="img-fluid">
          </a></div>
        <p>Your Trusted Truck Rental Solution </p>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="widget no-box">
        <h6 class="widget-title">Quick Links</h6>
        <ul class="thumbnail-widget">
          <li>
            <div class="thumb-content"><a href="#.">About</a></div>
          </li>
          <li>
            <div class="thumb-content"><a href="#.">Rent Details</a></div>
          </li>
          <li>
            <div class="thumb-content"><a href="#.">Why choose us</a></div>
          </li>
          <li>
            <div class="thumb-content"><a href="#.">Terms and Conditions</a></div>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="col-xs-12 col-sm-6 col-md-3">

      <div class="widget no-box">
        <h6 class="widget-title">Contact Us</h6>

          <p class="my-1"><a href="mailto:info@truckrentify.com">info@truckrentify.com</a></p>
          <p><a href="tele:+91 9876543210">+91 98765 43210</a></p>

      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="widget no-box">
        <h6 class="widget-title">Get deals and discounts</h6>
        <p class="my-1 subscribe">Subscribe to our newsletter</p>
        <a class="btn" target="_blank">Subscribe Now</a>
      </div>
    </div>


  </div>
</div>
</div>

<div class="footer-copyright">
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <p>Copyright Truck Rentify © 2023. All rights reserved.</p>
    </div>
  </div>
</div>
</div>`

document.querySelector("#navbar").innerHTML += headerHTML;
document.querySelector('#footer').innerHTML += footerHTML;

(function mainScript() {
    "use strict";
    const offcanvasToggle = document.querySelector(
      '[data-bs-toggle="offcanvas"]'
    );
    const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
    offcanvasToggle.addEventListener("click", function () {
      offcanvasCollapse.classList.toggle("open");
    });
  })();
  