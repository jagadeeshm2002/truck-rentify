
const headerHTML = `<div class="custom-navbar py-3">
<div class="container">
  <div class="row px-3 position-relative">
    <div class="col col-lg-3 col-sm-6">
      <a href="../index.html" class="logo">
        <img src="../src/images/Logo.png" alt="logo" class="img-fluid">
      </a>
    </div>
    <div class=" col d-none d-lg-block d-xl-block text-center  d-xl-flex justify-content-end ">
      <ul class="custom-nav col-6  col-lg-9 mt-2" style="min-width:665px">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../pages/about.html">About Us</a></li>
        <li><a href="../pages/vehicles.html">Vehicle Models</a></li>
        <li><a href="../pages/testimonials.html">Testimonials</a></li>
        <li><a href="../pages/our-team.html">Our Team</a></li>
        <li><a href="../pages/contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="d-block d-lg-none col col-sm-6 d-flex flex-row-reverse">
      <button class="hamburger-btn " type="button" data-bs-toggle="offcanvas"
        aria-label="Toggle navigation">
        <i class="fas fa-bars fa-xl"></i>
      </button>
    </div>
  </div>
  <div class="mobile-navbar position-absolute offcanvas-collapse open" id="navbarsExampleDefault">
    <ul class="mobile-nav navbar-nav me-auto mb-2 mb-lg-0">
      <li><a href="../index.html">Home</a></li>
      <li><a href="../pages/about.html">About Us</a></li>
      <li><a href="../pages/vehicles.html">Vehicle Models</a></li>
      <li><a href="../pages/testimonials.html">Testimonials</a></li>
      <li><a href="../pages/our-team.html">Our Team</a></li>
      <li><a href="../pages/contact.html">Contact Us</a></li>
    </ul>
  </div>
</div>
</div>

`
const footerHTML = `<div class="container-fluid download-app py-3 ">
<div class="container">
<div class="row download gap-3 px-3 ">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center flex-column  " ><h5 class="text-sm-center text-md-center text-start ">Download our mobile app✨</h5>
<p class="text-center text-lg-start">Get exclusive access to car rentals with our app. <br class="d-none d-xl-block d-lg-block d-md-block">
  Download now and experience convenience on the go.
</p></div>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 download-btn-all d-flex align-items-center justify-content-center" >
  <img  class="download-btn" src="../src/images/Buttons.png" alt="">

</div>
</div></div></div>
<div class="main-footer widgets-dark typo-light">
<div class="container">
  <div class="row flex-wrap">

    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="widget subscribe no-box">
        <div class="widget-title"><a href="../index.html" class="logo">
            <img src="../src/images/Logo.png" alt="logo" class="img-fluid">
          </a></div>
        <p>Your Trusted Truck Rental Solution </p>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="widget no-box">
        <h6 class="widget-title">Quick Links</h6>
        <ul class="thumbnail-widget">
          <li>
            <div class="thumb-content"><a href="../pages/about.html">About</a></div>
          </li>
          <li>
            <div class="thumb-content"><a href="#">Rent Details</a></div>
          </li>
          <li>
            <div class="thumb-content"><a href="#">Why choose us</a></div>
          </li>
          <li>
            <div class="thumb-content"><a href="#">Terms and Conditions</a></div>
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



(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// document.addEventListener('DOMContentLoaded', function () {
//   // Assuming your form has an ID of 'booking-form'
//   const form = document.querySelector('.needs-validation');
//   let modal = new bootstrap.Modal(document.getElementById('formModal'));

//   form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevents the default form submission behavior

//     // Get values from form fields
//     const selectedVehicle = document.getElementById('vehicle').value;
//     const pickupLocation = document.getElementById('pickup-location').value;
//     const pickupDate = document.getElementById('pickup-date').value;
//     const returnDate = document.getElementById('return-date').value;

//     document.getElementById('model-pickup-date').innerText = pickupDate;
//     document.getElementById('model-drop-date').innerText = returnDate;
//     document.getElementById('model-pickup-location').innerText = pickupLocation;
//     document.getElementById('model-vehicle-name').innerText = selectedVehicle;

   
    

//     // You can now use the 'bookingDetails' object as needed, for example, send it to a server or perform other actions.
//     modal.show()
//     // Clear the form fields if needed
//     form.reset();
    
//   });
// });

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('booking-form');

    form.addEventListener('submit', function (event) {
      if (form.checkValidity()) {
        // If the form is valid, prevent the default form submission
        event.preventDefault();

        const selectedVehicle = document.getElementById('vehicle').value;
        const pickupLocation = document.getElementById('pickup-location').value;
        const pickupDate = document.getElementById('pickup-date').value;
        const returnDate = document.getElementById('return-date').value;
    
        document.getElementById('model-pickup-date').innerText = pickupDate;
        document.getElementById('model-drop-date').innerText = returnDate;
        document.getElementById('model-pickup-location').innerText = pickupLocation;
        document.getElementById('model-vehicle-name').innerText = selectedVehicle;
    

        // Display the modal
        const modal = new bootstrap.Modal(document.getElementById('formModal'));
        modal.show();

        // Reset the form if needed
        form.reset();
      } else {
        // If the form is not valid, let it proceed with the default behavior (showing validation errors)
        form.classList.add('was-validated');
      }
    });
  });

