import { trucks } from '../data/data.js';



let productHTML = '';

trucks.forEach((truck) => {
  productHTML += ` <div class="card d-felx flex-column ">
    <div class="card-img">
      <img src="../${truck.image}" alt="">
    </div>
    <div class="card-details">
      <p class=" m-0 mt-1">${truck.name}</p>
      <p class="fw-bolder fs-5 m-0 mb-2">1000<span class="font-monospace "
          style="font-size:small; color: rgb(105, 93, 93);">/day</span></p>
      <div class="specification d-flex justify-content-around p-1 mb-2">
        <div class="d-flex flex-column justify-content-center align-items-center gap-1 m-0"> <img class=""
            style="width: 18px;" src="../src/svg/speedometer-01.svg" alt="">
          <p class="m-0" style="font-size: small;">4,000</p>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center gap-1 m-0"> <img class=""
            style="width: 18px;" src="../src/svg/manual-gearbox.svg" alt="">
          <p class="m-0" style="font-size: small;">Auto</p>
        </div>

        <div class="d-flex flex-column justify-content-center align-items-center gap-1 m-0"> <img class=""
            style="width: 18px;" src="../src/svg/users-01.svg" alt="">
          <p class="m-0" style="font-size: small;">2 Person</p>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center gap-1 m-0"> <img class=""
            style="width: 18px;" src="../src/svg/gas-station.svg" alt="">
          <p class="m-0" style="font-size: small;">Pertol</p>
        </div>

      </div>
    </div>
    <div class="card-rent-btn d-flex">
      <button type="button" class="card-button py-1">Rent now</button>
    </div>

  </div>`

});

document.querySelector('.js-vehicle-cards').innerHTML = productHTML;



